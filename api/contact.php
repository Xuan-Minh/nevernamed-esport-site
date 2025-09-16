<?php
NeverNamed : NOW OR NEVER// contact.php – Flux unifié (JSON ou POST), Turnstile optionnel, PHPMailer via vendor/composer
header('Content-Type: application/json');

require __DIR__ . '/../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Charge une config locale si présente (non versionnée)
if (file_exists(__DIR__ . '/config.php')) {
    require __DIR__ . '/config.php';
}

// Autorise uniquement POST
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
    exit;
}

// Récupère les données: JSON (application/json) ou formulaire (POST)
$raw = file_get_contents('php://input');
$isJson = isset($_SERVER['CONTENT_TYPE']) && stripos($_SERVER['CONTENT_TYPE'], 'application/json') !== false;
$input = $isJson ? json_decode($raw, true) : null;

// Normalise les champs
$honeypot = $isJson ? trim($input['company'] ?? '') : trim($_POST['company'] ?? '');
if (!empty($honeypot)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Spam detected']);
    exit;
}

if ($isJson && is_array($input)) {
    $firstname = filter_var(trim($input['firstname'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $lastname  = filter_var(trim($input['lastname'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email     = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
    $message   = filter_var(trim($input['message'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $phone     = filter_var(trim($input['phone'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $topic     = filter_var(trim($input['topic'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $token     = $input['cf-turnstile-response'] ?? '';
    $displayName = trim($firstname . ' ' . $lastname);
} else {
    $name    = filter_var(trim($_POST['name'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email   = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
    $message = filter_var(trim($_POST['message'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $phone   = filter_var(trim($_POST['phone'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $topic   = filter_var(trim($_POST['topic'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $token   = $_POST['cf-turnstile-response'] ?? '';
    $displayName = $name;
}

if (empty($displayName) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Veuillez remplir tous les champs requis.']);
    exit;
}

// Vérification Turnstile (optionnelle): nécessite $turnstile_secret_key défini (config/env) et un token
$turnstile_secret_key = $turnstile_secret_key ?? getenv('TURNSTILE_SECRET') ?: '';
if (!empty($turnstile_secret_key) && !empty($token)) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://challenges.cloudflare.com/turnstile/v0/siteverify');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
        'secret'   => $turnstile_secret_key,
        'response' => $token,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
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
}

// Prépare PHPMailer
$mail = new PHPMailer(true);
try {
    $smtp_host     = $smtp_host     ?? getenv('SMTP_HOST');
    $smtp_username = $smtp_username ?? getenv('SMTP_USERNAME');
    $smtp_password = $smtp_password ?? getenv('SMTP_PASSWORD');
    $smtp_port     = $smtp_port     ?? (getenv('SMTP_PORT') ?: 465);
    $smtp_encryption = $smtp_encryption ?? (getenv('SMTP_ENCRYPTION') ?: 'ssl'); // 'ssl' ou 'tls'
    $recipient_email = $recipient_email ?? (getenv('RECIPIENT_EMAIL') ?: $smtp_username);

    if (!empty($smtp_host) && !empty($smtp_username) && !empty($smtp_password)) {
        $mail->isSMTP();
        $mail->Host       = $smtp_host;
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtp_username;
        $mail->Password   = $smtp_password;
        // Détermine le chiffrement à utiliser
        $smtp_encryption = strtolower((string)$smtp_encryption);
        if ($smtp_encryption === 'tls') {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        } else {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // défaut: ssl
        }
        $mail->Port       = (int)$smtp_port;
    } else {
        // Fallback: utilise la fonction mail/sendmail du serveur
        $mail->isMail();
    }
    $mail->CharSet = 'UTF-8';

    // Expéditeur et destinataire
    $fromAddress = !empty($smtp_username) ? $smtp_username : ('no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost'));
    $mail->setFrom($fromAddress, 'Contact Nevernamed');
    $mail->addAddress($recipient_email ?: $fromAddress);
    $mail->addReplyTo($email, $displayName);

    // Contenu
    $mail->isHTML(false);
    $subjectName = $displayName ?: 'Utilisateur';
    $mail->Subject = 'Nouveau message - Nevernamed (' . $subjectName . ')';
    $lines = [
        'Nom: ' . $subjectName,
        'Email: ' . $email,
        'Téléphone: ' . ($phone ?: 'Non fourni'),
        'Sujet: ' . ($topic ?: 'Non précisé'),
        '',
        'Message:',
        $message,
    ];
    $mail->Body = implode("\n", $lines);

    $mail->send();
    http_response_code(200);
    echo json_encode(['status' => 'success', 'message' => 'Message envoyé avec succès !']);
} catch (Exception $e) {
    http_response_code(500);
    error_log('Mailer Error: ' . $mail->ErrorInfo);
    echo json_encode(['status' => 'error', 'message' => 'Le message n\'a pas pu être envoyé.']);
}
?>
