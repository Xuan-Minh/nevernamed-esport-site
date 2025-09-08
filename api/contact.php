<?php
// contact.php - version robuste avec PHPMailer pour hébergement mutualisé (o2switch)
// Place PHPMailer dans un dossier vendor ou incluez via Composer

require __DIR__ . '/../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

// Sécurité : n'accepte que POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Méthode non autorisée']);
    exit;
}

// Récupération et validation des données
$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Données invalides']);
    exit;
}

// Préparation de l'email
$mail = new PHPMailer(true);
try {
    // Config SMTP o2switch (à adapter si besoin)
    // $mail->isSMTP();
    // $mail->Host = 'localhost';
    // $mail->SMTPAuth = false;
    // $mail->Port = 25;

    $mail->setFrom('no-reply@thenevernamed.com', 'Formulaire Contact');
    $mail->addAddress('ton.email@thenevernamed.com'); // À adapter
    $mail->addReplyTo($email, $name);
    $mail->Subject = 'Nouveau message via le formulaire de contact';
    $mail->Body    = "Nom: $name\nEmail: $email\nMessage:\n$message";

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => "Erreur d'envoi: {$mail->ErrorInfo}"]);
}

// Accepte uniquement les requêtes POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
    exit;
}

// Récupère les données JSON envoyées par React
$input = json_decode(file_get_contents('php://input'), true);

// 1. Sécurité : Honeypot (champ caché pour les bots)
if (!empty($input['company'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Spam detected']);
    exit;
}

// 2. Sécurité : Validation des données
$firstname = filter_var(trim($input['firstname'] ?? ''), FILTER_SANITIZE_STRING);
$lastname = filter_var(trim($input['lastname'] ?? ''), FILTER_SANITIZE_STRING);
$email = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$message = filter_var(trim($input['message'] ?? ''), FILTER_SANITIZE_STRING);
$token = $input['cf-turnstile-response'] ?? '';

if (empty($firstname) || empty($lastname) || empty($email) || empty($message) || empty($token)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Veuillez remplir tous les champs requis.']);
    exit;
}

// 3. Sécurité : Vérification du CAPTCHA Turnstile
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://challenges.cloudflare.com/turnstile/v0/siteverify');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
    'secret' => $turnstile_secret_key,
    'response' => $token,
    'remoteip' => $_SERVER['REMOTE_ADDR']
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$turnstile_response = curl_exec($ch);
curl_close($ch);
$turnstile_data = json_decode($turnstile_response, true);

if (!($turnstile_data['success'] ?? false)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'La vérification anti-robot a échoué.']);
    exit;
}

// 4. Envoi de l'email avec PHPMailer
$mail = new PHPMailer(true);
try {
    // Configuration du serveur SMTP
    $mail->isSMTP();
    $mail->Host       = $smtp_host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_username;
    $mail->Password   = $smtp_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $smtp_port;
    $mail->CharSet    = 'UTF-8';

    // Destinataires
    $mail->setFrom($smtp_username, 'Contact Nevernamed'); // L'expéditeur
    $mail->addAddress($recipient_email);                 // Le destinataire
    $mail->addReplyTo($email, $firstname . ' ' . $lastname); // Pour répondre directement à l'utilisateur

    // Contenu de l'email
    $mail->isHTML(false); // Email en format texte
    $mail->Subject = 'Nouveau message de ' . $firstname . ' - Nevernamed';
    $mail->Body    = "Vous avez reçu un nouveau message :\n\n" .
                     "Nom: " . $firstname . " " . $lastname . "\n" .
                     "Email: " . $email . "\n" .
                     "Téléphone: " . ($input['phone'] ?? 'Non fourni') . "\n" .
                     "Sujet: " . ($input['topic'] ?? 'Non précisé') . "\n\n" .
                     "Message:\n" . $message;

    $mail->send();
    http_response_code(200);
    echo json_encode(['status' => 'success', 'message' => 'Message envoyé avec succès !']);
} catch (Exception $e) {
    http_response_code(500);
    // Ne jamais afficher l'erreur exacte à l'utilisateur en production
    error_log("Mailer Error: {$mail->ErrorInfo}"); // Log l'erreur pour vous
    echo json_encode(['status' => 'error', 'message' => 'Le message n\'a pas pu être envoyé.']);
}
?>