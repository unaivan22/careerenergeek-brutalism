<?php

// Allow requests from any origin (you can restrict this to specific domains if needed)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config.php';

// $host = "localhost";
// $db_name = "careerenergeek";
// $username = "una";
// $password = "unaivan";

// $conn = new mysqli($host, $username, $password, $db_name);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Database connection failed."]);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Fetching loker data
    $result = $conn->query("SELECT * FROM loker");
    $lokers = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($lokers);
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['loker_id'])) {
    // Applying for a loker (job application)
    $loker_id = $_POST['loker_id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $portfolio_link = $_POST['portfolio_link'];
    
    // Save the application
    $query = "INSERT INTO applications (loker_id, name, email, phone, portfolio_link) 
              VALUES ('$loker_id', '$name', '$email', '$phone', '$portfolio_link')";
    
    if ($conn->query($query)) {
        echo json_encode(['message' => 'Application submitted successfully']);
    } else {
        echo json_encode(['message' => 'Failed to submit application']);
    }
}

$conn->close();
