function verifyPassword() {  
  var password = document.getElementById("pwd").value;  
  var confirm_password = document.getElementById("confirm_pwd").value;  
  if(password == "") {  
     document.getElementById("message").innerHTML = "**Fill the password please!";  
     return false;  
  } 
   if(password.length < 8) {  
     document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
  } 
   if(password.length > 24) {  
     document.getElementById("message").innerHTML = "**Password length must not exceed 24 characters";  
     return false;  
  }
   if(password !== confirm_password){  
    document.getElementById("message").innerHTML = "**Passwords are not same";  
    return false;
  }
   if(password.search(/[0-9]/) < 0 ){  
    document.getElementById("message").innerHTML = "**password must contain at least one number";  
    return false;
  }
 if( password.search(/[a-z]/) < 0 ){
   document.getElementById("message").innerHTML = "**password must contain at least one lowercase letter";  
    return false;
 }
 if( password.search(/[A-Z]/) < 0 ){
   document.getElementById("message").innerHTML = "**password must contain at least one uppercase letter";  
    return false;
 }
 if( password.search(/[!@#$%^&*]/) < 0 ){
   document.getElementById("message").innerHTML = "**password must contain at least one special character";  
    return false;
 }
  else
  {
   return true;
  }  
}  

// function hello(){
//    alert("Successfull");
// }