<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test"; // Go to localhost/phpmyadmin and then create the database test there
// Creating connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO register (Username, Password) VALUES ('Aman', 'Gupta')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
