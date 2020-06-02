<?php
ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';
//var_dump($_GET);die;
$name = trim(htmlspecialchars($_POST['name']));
$email = trim(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL));
$msg = trim(htmlspecialchars($_POST['message']));

$mail = new PHPMailer();
$mail->isSMTP(true);
try {
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.ssf-solution.com';                   // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'info@ssf-solution.com';              // SMTP username
    $mail->Password = 's98HA7773m03*85';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to
    $mail->CharSet = 'UTF-8';
    //Recipients
    $mail->setFrom($email, $name);          //This is the email your form sends From
    $mail->addAddress('info@ssf-solution.com', 'Sam'); // Add a recipient address
    //$mail->addAddress('contact@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'From Contact Form';
    $mail->Body    = $msg;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo json_encode(['status' => 'true', 'msg' => 'Message has been sent']);
} catch (Exception $e) {
    echo json_encode(['status' => 'false', 'msg' => 'Message could not be sent.']);
}