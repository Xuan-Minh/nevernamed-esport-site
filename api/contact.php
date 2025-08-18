<?php
// Utilise PHPMailer depuis le dossier vendor
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Charge l'autoloader de Composer
require '../vendor/autoload.php';

// --- CONFIGURATION ---
// Remplacez par vos informations
$turnstile_secret_key = 'votre-clé-secrète-turnstile-ici';
$recipient_email = 'votre-email@domaine.com'; // L'email qui recevra les messages

// Configuration SMTP (trouvez-les dans votre cPanel o2switch)
$smtp_host = 'mail.o2switch.net';
$smtp_username = 'contact@votre-domaine.com'; // Votre adresse email complète
$smtp_password = 'votre-mot-de-passe-email';
$smtp_port = 465; // Port pour SSL
// --- FIN CONFIGURATION ---

// Headers pour la réponse JSON et CORS (Cross-Origin Resource Sharing)
header('Content-Type: application/json');
// Autorise votre site à appeler ce script (sécurité)
header('Access-Control-Allow-Origin: *'); // Mettez l'URL de votre site en production
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Gère la requête pre-flight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
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