<?php
<<<<<<< HEAD
=======

header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
header("Access-Control-Allow-Origin: http://127.0.0.1:5501");
header("Access-Control-Allow-Methods: POST"); // Adjust this based on the allowed HTTP methods
header("Access-Control-Allow-Headers: Content-Type");

>>>>>>> 95b9709cbdb450e8df9d6db0b3d0b948db79faaa
// Retrieve POST parameters
$username = $_POST["username"];
$password = $_POST["password"];

// Connect to the MySQL database
<<<<<<< HEAD
$conn = new mysqli("127.0.0.1", "root", "MONale014782!", "wildlife");
=======
$conn = new mysqli("127.0.0.1", "root", "password", "wildlife");
>>>>>>> 95b9709cbdb450e8df9d6db0b3d0b948db79faaa

// Check for errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL query using prepared statements to prevent SQL injection
<<<<<<< HEAD
$stmt = $conn->prepare("SELECT * FROM logging WHERE username=? AND password=?");
=======
$stmt = $conn->prepare("SELECT * FROM users WHERE username=? AND password=?");
>>>>>>> 95b9709cbdb450e8df9d6db0b3d0b948db79faaa
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

// Check if a row with the given username and password exists
if ($result->num_rows > 0) {
    // Send response indicating success
    echo "valid";
} else {
    // Send response indicating failure
    echo "invalid";
}

$stmt->close();
<<<<<<< HEAD
$conn->close();
?>
=======
$conn->close();
>>>>>>> 95b9709cbdb450e8df9d6db0b3d0b948db79faaa
