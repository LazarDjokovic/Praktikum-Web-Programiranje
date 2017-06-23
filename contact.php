<html>
	<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
		<title>Lazar Djokovic | Portfolio</title>
		<link rel="stylesheet" href="css/main.css"/>
        <link rel="shortcut icon" href="img/shortcutIcon/shortcutIcon.png"/>
        <script src="js/jquery-3.1.1.min.js"></script>
        <script type="text/JavaScript" src="js/main.js"></script>
	</head>
	<body>
		<header>
                <a href="index.php"><img src="img/praktikumLogo.jpg" alt="logo"/></a>
		</header>
		<nav>
			<div class="topnav" id="myTopnav">
              <a href="contact.php"  class="current"><strong>Contact</strong></a>
              <a href="index.php"><strong>Home</strong></a>
              <a href="about.php"><strong>About</strong></a>
              <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
            </div>
            <div class="topnav" id="myTopnavLarge">
              <a href="index.php"><strong>Home</strong></a>
              <a href="about.php"><strong>About</strong></a>
              <a href="contact.php"  class="current"><strong>Contact</strong></a>
            </div>
		</nav>
		<section id="main">
			<div id="projects">
                <div id="map">
                    
                </div>
                <div id="contactForm">
                    <h2>Contact me</h2>
                    <?php
					   include("contactFormCheck.php");
				    ?>
                    <form class="form-horizontal" action="<?php echo $_SERVER['PHP_SELF'];?>" method="post" onSubmit="return contactFormCheck();">
                        <input type="text" placeholder="Full name" name="name" id="name" class="inputText" onBlur="nameCheck();"/><p style="display:none;" id="pName">Incorrect full name</p><br/>
                        <input type="text" placeholder="Emai" name="email" class="inputText" id="email" onBlur="emailCheck();"/><p style="display:none;" id="pEmail">Incorrect email address</p><br/>
                        <textarea placeholder="Message" name="message" class="message"
                                  id="message" onBlur="yourMessageCheck();"></textarea><p style="display:none;" id="pMessageS">Message is to short</p>
							<p style="display:none;" id="pMessageL">Message is to long. You can't send more than 10000 characters</p><br/>
                        <input type="submit" value="Send" class="sendForm" name="sendForm" id="sendForm">
                    </form>
                </div>
            </div>
		</section>
		<footer>
			<div id="getInTouch">
                <a href="mailto:contact@lazardjokovic.com"><button id="getInTouchBtn">Get in touch</button></a>
			</div>
			<div id="myName">
                <strong>Lazar Djokovic - <a href="http://lazardjokovic.com" target="_blank" title="lazardjokovic.com">lazardjokovic.com</a></strong>
			</div>
			<div id="allRightsReserved">
			     <strong>2017 ALL RIGHTS RESERVED</strong>
			</div>
			<div id="socialNetworks">
                    <li><a href="https://www.facebook.com/profile.php?id=100000430518730"  target="_blank"><img src="img/socialNetworks/fb.png" title="facebook"/></a></li>
                    <li><a href="https://twitter.com/lazardjokovic95" target="_blank"><img src="img/socialNetworks/twitter.png" title="twitter" /></a></li>
                    <li><a href="https://github.com/LazarDjokovic" target="_blank"><img src="img/socialNetworks/github.png" title="github"/></a></li>
			</div>
		</footer>
        <script src="js/jquery-3.1.1.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAv11cVLZ1N596UC5VI7BgL09Qqbfu3Z88&callback=initMap"
    async defer></script>
	</body>
</html>