<?php 

// form validation of user 
$nameError = $emailError = $passwordError = "";

if ($_SERVER["REQUEST_METHOD"]=="post"){

   $name = trim($_POST["full_name"]);
   $email = trim($_POST["email"]);
   $password = $_POST["password"];
   
    if (!preg_match("/^[a-zA-Z\s]{2,50}$/",$name)){
        $nameError = "Invalid Name";
    }
   if(!filter_var($email,FILTER_VALIDATE_EMAIL) || !preg_match("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/",$email))

    {
        $nameError = "Invalid email";
    }
   
    
    if(!preg_match("/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/",$password))
      $passwordError = "Password must contain letters and numbers";


}





?>