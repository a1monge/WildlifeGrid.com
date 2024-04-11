<?php

header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
header("Access-Control-Allow-Methods: POST"); // Adjust this based on the allowed HTTP methods
header("Access-Control-Allow-Headers: Content-Type");

// Connect to MySQL server
$servername = "127.0.0.1";
$username = "root"; // Replace with your MySQL username
$password = "password"; // Replace with your MySQL password
$database = "wildlife"; // Replace with your database name

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch animal names from the species table
$sql = "SELECT species_name FROM species";
$result = $conn->query($sql);

$animalNames = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Handle special characters properly
        $animalNames[] = htmlspecialchars($row["species_name"], ENT_QUOTES, 'UTF-8');
    }
}

// Close MySQL connection
$conn->close();

// Return JSON response with animal names
header('Content-Type: application/json');
echo json_encode($animalNames);