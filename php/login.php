<?php
// Hardcoded credentials for demo purposes
$valid_userid = "admin";
$valid_password = "1234";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userid = $_POST['userid'];
    $password = $_POST['password'];

    // Check credentials
    if ($userid === $valid_userid && $password === $valid_password) {
        // Redirect to welcome page
        header("Location: welcome.php");
        exit();
    } else {
        echo "<h3 style='color:red;'>Invalid User-ID or Password</h3>";
    }
}
?>
