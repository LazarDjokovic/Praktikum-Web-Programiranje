$(document).ready(function(){
   setTimeout(function(){

        $("#messageSent").fadeOut().empty();

   },4000);
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//-----------------------Contact form START------------------------------------
function nameCheck(){
	var name=document.getElementById("name").value;
	var regName=/^[A-Z][A-z]{2,}\s[A-Z][A-z]{2,}$/;
	
	if(name.length==0){
		document.getElementById("name").style.borderColor="";
		document.getElementById("pName").style.display="none";
	}
	else if(!regName.test(name)){
		document.getElementById("name").style.borderColor="red";
		document.getElementById("pName").style.display="block";
		document.getElementById("pName").style.color="red";
	}
	else{
		document.getElementById("name").style.borderColor="";
		document.getElementById("pName").style.display="none";
	}
}

function emailCheck(){
	var email=document.getElementById("email").value;
	var regEmail=/^[\w\.]+[\d]*@[\w]+\.\w{2,3}(\.[\w]{2})?$/;
	
	if(email.length==0){
		document.getElementById("email").style.borderColor="";
		document.getElementById("pEmail").style.display="none";
	}
	else if(!regEmail.test(email)){
		document.getElementById("email").style.borderColor="red";
		document.getElementById("pEmail").style.display="block";
		document.getElementById("pEmail").style.color="red";
	}
	else{
		document.getElementById("email").style.borderColor="";
		document.getElementById("pEmail").style.display="none";
	}
}

function yourMessageCheck(){
	var yourMessage=document.getElementById("message").value;
	var maxlen = 10000;
	var minlen = 5;
	
	if(yourMessage.length==0){
		document.getElementById("message").style.borderColor="";
		document.getElementById("pMessageS").style.display="none";
		document.getElementById("pMessageL").style.display="none";
	}
	else if(yourMessage.length > maxlen){ 
		document.getElementById("message").style.borderColor="red";
		document.getElementById("pMessageL").style.display="block";
		document.getElementById("pMessageL").style.color="red";
		document.getElementById("pMessageS").style.display="none";
	}
	else if(yourMessage.length < minlen){ 
	    document.getElementById("message").style.borderColor="red";
	    document.getElementById("pMessageS").style.display="block";
		document.getElementById("pMessageS").style.color="red";
		document.getElementById("pMessageL").style.display="none";
	}
	else{
		document.getElementById("message").style.borderColor="";
		document.getElementById("pMessageS").style.display="none";
		document.getElementById("pMessageL").style.display="none";
	}
}


function contactFormCheck(){
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var yourMessage=document.getElementById("message").value;
	
	var regName=/^[A-Z][A-z]{2,}\s[A-Z][A-z]{2,}$/;
	var regEmail=/^[\w\.]+[\d]*@[\w]+\.\w{2,3}(\.[\w]{2})?$/;
	var maxlen = 10000;
	var minlen = 2;
	
	var errors=0;
	
	
	
	if(!regName.test(name)){
		document.getElementById("name").style.borderColor="red";
		document.getElementById("pName").style.display="block";
		document.getElementById("pName").style.color="red";
		errors++;
	}
	else{
		document.getElementById("name").style.borderColor="";
		document.getElementById("pName").style.display="none";
	}
	
	
	
	
	if(!regEmail.test(email)){
		document.getElementById("email").style.borderColor="red";
		document.getElementById("pEmail").style.display="block";
		document.getElementById("pEmail").style.color="red";
		errors++;
	}
	else{
		document.getElementById("email").style.borderColor="";
		document.getElementById("pEmail").style.display="none";
	}
	
	
	
	
	if(yourMessage.length > maxlen){ 
		document.getElementById("message").style.borderColor="red";
		document.getElementById("pMessageL").style.display="block";
		document.getElementById("pMessageL").style.color="red";
		document.getElementById("pMessageS").style.display="none";
		errors++;
	}
	else if(yourMessage.length < minlen){ 
	    document.getElementById("message").style.borderColor="red";
	    document.getElementById("pMessageS").style.display="block";
		document.getElementById("pMessageS").style.color="red";
		document.getElementById("pMessageL").style.display="none";
		errors++;
	}
	else{
		document.getElementById("message").style.borderColor="";
		document.getElementById("pMessageS").style.display="none";
		document.getElementById("pMessageL").style.display="none";
	}
	
	if(errors!=0){
		return false;
	}else{
		return true;
	}
}
//-----------------------Contact form END------------------------------------

function initMap() {

    var uluru = {lat: 44.733848, lng: 20.613611};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        scrollwheel: false,
        center: uluru,
        styles: [
            {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        { "saturation": -100 },
        { "lightness": -8 },
        { "gamma": 1.18 }
      ]
  }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        { "saturation": -100 },
        { "gamma": 1 },
        { "lightness": -24 }
      ]
  }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "administrative",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "transit",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "road",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "administrative",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "landscape",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "poi",
      "stylers": [
        { "saturation": -100 }
      ]
  }
        ]
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}