<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);
    $address = trim($_POST["address"]);
    $zip = trim($_POST["zip"]);
    $email = trim($_POST["email"]);
    $country = $_POST["country"];
    $sex = $_POST["sex"];
    $language = $_POST["language"];
    $about = trim($_POST["about"]);

    $errorMessage = "";

    if (empty($name)) {
        $errorMessage .= "Name is required.<br>";
    }
    if (empty($username)) {
        $errorMessage .= "Username is required.<br>";
    }
    if (empty($password)) {
        $errorMessage .= "Password is required.<br>";
    }
    if (empty($address)) {
        $errorMessage .= "Address is required.<br>";
    }
    if (empty($zip)) {
        $errorMessage .= "Zip code is required.<br>";
    }
    if (empty($email)) {
        $errorMessage .= "Email is required.<br>";
    }
    if (empty($country)) {
        $errorMessage .= "Country is required.<br>";
    }
    if (empty($sex)) {
        $errorMessage .= "Sex is required.<br>";
    }
    if (empty($language)) {
        $errorMessage .= "Language is required.<br>";
    }
    if (empty($about)) {
        $errorMessage .= "About is required.<br>";
    }

    if (!empty($errorMessage)) {
        $errorMessage = "Please enter the following information:<br>" . $errorMessage;
    } 
}

?>
