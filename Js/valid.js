$(document).on("click","#submit",function(){
	var username=$("#username").val();
	var password=$("#password").val();
	var email=$("#emails").val();	
	var phone=$("#phoneno").val();
      var cop=$("#cop").val();
      var add=$("#address").val();						
	if(username=="" || password=="" || email=="" ||phone=="" || cop=="" || add=="")
	{
		alert("Blank space is not allowed");
		return false;
	}
	else
	{
		return true;
	}
});
$(document).on("blur","#username",function(){
	var username=$("#username").val();	
	if(username=="")
	{
		alert("Please enter Your Username");
	}
});
$(document).on("blur","#emails",function(){
	var email=$("#emails").val();	
	var emailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email=="")
	{
		alert("Please enter Your Email");
	}
	else if(!email.match(emailformat))
	{
	
		alert("You have entered an invalid email address!");
	}
});
$(document).on("blur","#phoneno",function(){
	var phone=$("#phoneno").val();	
	var phoneformat= /^(\d){10}$/;
	if(phone=='')
	{
		alert("Please Enter your Mobile Number");				
	}
	else if(!phone.match(phoneformat))
	{
		alert("Invalid Phone Number!");
	}
});
$(document).on("blur","#password",function(){
	var pass=$("#password").val();	
	var passwordformat= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*-]).{8,}$/;
	if(pass=='')
	{
		alert("Please Enter your Password");				
	}
	else if(!pass.match(passwordformat))
	{
		alert("Invalid Password!");
	}
});
$(document).on("blur","#cop","#password",function(){
	var pass=$("#cop").val();	
	var password=$("#password").val();
	if(pass=='')
	{
		alert("Please Enter your Password Again");				
	}
	else if(!pass.match(password))
	{
		alert("Password Does not Match");
	}
});
$(document).on("blur","#address",function(){
	var addr=$("#address").val();
	var addressformat=/^[a-zA-Z0-9,.'-]{3,}$/;
	if(addr=='')
	{
		alert("Please Enter your Address");				
	}
	else if(!addr.match(addressformat))
	{
		alert("Invalid Address!");
	}
});



