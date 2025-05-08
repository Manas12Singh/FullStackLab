<?php
// Grab User submitted information
$email = $_POST["users_email"];
$pass = $_POST["users_pass"];

// Connect to the database
$conn = new mysqli("localhost","root","","test");
// Make sure we connected successfully
if($conn->connect_error)
{
    die('Connection Failed'.$conn->connect_error);
}

$sql="select email, password from register where email='$email'";

$result = $conn->query($sql);
if ($result-> num_rows>0)
{
	while($row=$result->fetch_assoc())
	{
		if($row['email']==$email && $row['password']==$pass)
			echo"You are a validated user";
		else
			echo"Wrong password";
	}
}
else echo "User does not exist";
?>
