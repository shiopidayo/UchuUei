<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "sukoyakanainu@gmail.com";  // 送信先のメールアドレス
  $subject = "New Message from Contact Form";
  $headers = "From: $email";

  mail($to, $subject, $message, $headers);  // メールを送信

  echo "Your message has been sent!";
}
?>
