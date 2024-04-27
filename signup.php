<?php
header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
header("Access-Control-Allow-Origin: http://127.0.0.1:5501");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Get the user data from the AJAX request
$username = $_POST["username"]; // Changed from $name to $username
$email = $_POST["email"];
$password = $_POST["password"];

// Connect to the MySQL database
$conn = new mysqli("127.0.0.1", "root", "password", "wildlife");

// Check for errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert the data into the database
$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
if (mysqli_query($conn, $sql)) {
    echo "Signup successful!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the MySQL connection
$conn->close();
?>
<?php
header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Get the user data from the AJAX request
$username = $_POST["username"]; // Changed from $name to $username
$email = $_POST["email"];
$password = $_POST["password"];

// Connect to the MySQL database
$conn = new mysqli("127.0.0.1", "root", "password", "wildlife");

// Check for errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert the data into the database
$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
if (mysqli_query($conn, $sql)) {
    echo "Signup successful!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the MySQL connection
$conn->close();
?>