<?php
// Copiez ce fichier en config.php et renseignez vos identifiants en production.

// SMTP (optionnel si vous utilisez sendmail du serveur)
$smtp_host = '';
$smtp_username = '';
$smtp_password = '';
$smtp_port = 465; // 465 = SMTPS (SSL), 587 = STARTTLS (TLS)
$smtp_encryption = 'ssl'; // 'ssl' pour 465, 'tls' pour 587
$recipient_email = '';

// Cloudflare Turnstile (optionnel)
$turnstile_secret_key = '';
