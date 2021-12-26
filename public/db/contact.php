<?php

	$name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];


//email
	if (isset($_POST['name']) && isset($_POST['email'])) {
	$to = 'contact@timbittins.com';
	$subject = 'Neue Nachricht Kontaktformular';
	$body =  "'.$name.' <br> '.$email.' <br> '.$message.' <br> ";
	$headers = "From: ".$name." <".$email.">\r\n";
	$headers .= "Reply-To: ".$email."\r\n";
	$headers .= "MIME-Version: 1.0\r\m";
	$headers .= "Content-type: text/html; charste=utf-8";
	
	$send = mail($to, $subject, $body, $headers); echo $send;
	}