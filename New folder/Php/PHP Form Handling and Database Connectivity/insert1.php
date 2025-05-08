<?php
// Grab User submitted information
$email1 = $_POST["email"];
$pass1 = $_POST["pass"];

$servername = "localhost";
$username = "root";
$password = "";
$databasename = "testnew"; // Go to localhost/phpmyadmin and then create the database test there
// Creating connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Make sure we connected successfully
if($conn->connect_error)
{
    die('Connection Failed'.$conn->connect_error);
}

$sql= "insert into register Values('$email1','$pass1')";
$result = $conn->query($sql);
if($result)
	echo"Record added";
else echo"Record Could not be added";
?>
