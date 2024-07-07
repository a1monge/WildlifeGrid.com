<?php
header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
header("Access-Control-Allow-Origin: http://127.0.0.1:5501");
header("Access-Control-Allow-Methods: GET, POST");
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

// Check if the form data and species column name are provided
if(isset($_POST['animalSpecies']) && isset($_POST['speciesColumn'])) {
    $searchTerm = $_POST['animalSpecies']; // Get the search term from the form
    $speciesColumn = $_POST['speciesColumn']; // Get the species column name

    // Check if the provided name exists in the species_names column
    $sqlCheckName = "SELECT * FROM species WHERE $speciesColumn LIKE ?";
    $stmtCheckName = $conn->prepare($sqlCheckName);
    $searchTerm = '%' . $searchTerm . '%'; // Adding wildcards to search for partial matches
    $stmtCheckName->bind_param("s", $searchTerm);
    $stmtCheckName->execute();
    $resultCheckName = $stmtCheckName->get_result();
    
    // Check if the species exists
    if($resultCheckName->num_rows > 0) {
        $row = $resultCheckName->fetch_assoc();
        $species_id = $row['species_id']; // Get the species_id
        $sightings = $row['sightings'] + 1; // Increment sightings count
        
        // Update sightings count for the matched species
        $sqlUpdateCount = "UPDATE species SET sightings = ? WHERE $speciesColumn LIKE ?";
        $stmtUpdateCount = $conn->prepare($sqlUpdateCount);
        $stmtUpdateCount->bind_param("is", $sightings, $searchTerm);
        
        if ($stmtUpdateCount->execute()) {
            // Species count updated successfully
            echo json_encode(array("message" => "Species count updated successfully"));
            
            // Insert a new row into sightings table
            if(isset($_POST['location']) && isset($_POST['date_sighted'])) {
                $location = $_POST['location'];
                $date_sighted = $_POST['date_sighted'];
                
                $sqlInsertSighting = "INSERT INTO sightings (location, date_sighted, species_id) VALUES (?, ?, ?)";
                $stmtInsertSighting = $conn->prepare($sqlInsertSighting);
                $stmtInsertSighting->bind_param("ssi", $location, $date_sighted, $species_id);
                
                if($stmtInsertSighting->execute()) {
                    // New sighting inserted successfully
                     echo json_encode(array("success" => true, "message" => "Report Successful"));
                     
                } else {
                    // Error inserting new sighting
                    echo json_encode(array("message" => "Error inserting new sighting: " . $conn->error));
                }
            }
        } else {
            // Error updating species count
            echo json_encode(array("message" => "Error updating species count: " . $conn->error));
        }

        // Close the prepared statement
        $stmtUpdateCount->close();
    } else {
        // Provided name does not exist in the species_names column
        echo json_encode(array("message" => "Species name not found"));
    }

    // Close the prepared statement
    $stmtCheckName->close();
}

// Close MySQL connection
$conn->close();
?>