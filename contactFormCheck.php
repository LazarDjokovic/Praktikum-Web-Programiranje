<?php
	if(isset($_REQUEST['sendForm'])){
		$name=$_REQUEST['name'];
		$email=$_REQUEST['email'];
		$yourMessage=$_REQUEST['message'];
		
		$message="
		<html>
			<head></head>
			<body>
				<table border='1px'>
					<tr>
						<th colspan='2' style='color:#0000FF;'>Contact Form ZolaTrade</th>
					</tr>
					<tr>
						<td style='color:#0000FF;'><b>Name</b></td>
						<td>".$name."</td>
					</tr>
					<tr>
						<td style='color:#0000FF;'><b>Email</b></td>
						<td>".$email."</td>
					</tr>
					<tr>
						<td style='color:#0000FF;'><b>Message</b></td>
						<td>".$yourMessage."</td>
					</tr>
				</table>
			</body>		
		</html>";
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;" . "\r\n";
		 
		mail("contact@lazardjokovic.com","Contact From | Portfolio",$message,$headers);
		
		echo("<div class='messageSent' id='messageSent'>
					<p><strong><i>Ty for contacting me, i will reply as soon  as i can!<strong></i></p>
			  </div>");
	}
?>