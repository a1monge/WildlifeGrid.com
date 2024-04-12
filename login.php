<?php
// Retrieve POST parameters
$username = $_POST["username"];
$password = $_POST["password"];

// Connect to the MySQL database
$conn = new mysqli("127.0.0.1", "root", "MONale014782!", "wildlife");

// Check for errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL query using prepared statements to prevent SQL injection
$stmt = $conn->prepare("SELECT * FROM logging WHERE username=? AND password=?");
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
$conn->close();
?>