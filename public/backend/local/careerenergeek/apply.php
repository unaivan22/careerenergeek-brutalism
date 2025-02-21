<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

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

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['loker_id'])) {
    $loker_id = $_POST['loker_id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $portfolio_link = $_POST['portfolio_link'];
    $shortresume = $_POST['shortresume'];
    $desiredsalary = $_POST['desiredsalary'];

    // Handle file upload
    if (isset($_FILES['attachment'])) {
        $file = $_FILES['attachment'];
        $allowedTypes = ['application/pdf'];
        
        if (in_array($file['type'], $allowedTypes)) {
            $fileName = uniqid('resum_') . '.pdf'; // Create unique file name
            $filePath = 'attachment/' . $fileName;

            if (move_uploaded_file($file['tmp_name'], $filePath)) {
                // Save application data along with the file path
                $query = "INSERT INTO applications (loker_id, name, email, phone, portfolio_link, attachment, shortresume, desiredsalary) 
                          VALUES ('$loker_id', '$name', '$email', '$phone', '$portfolio_link', '$filePath', '$shortresume', '$desiredsalary')";
                
                if ($conn->query($query)) {
                    echo json_encode(['message' => 'Application submitted successfully']);
                } else {
                    echo json_encode(['message' => 'Failed to submit application']);
                }
            } else {
                echo json_encode(['message' => 'Failed to upload file']);
            }
        } else {
            echo json_encode(['message' => 'Only PDF files are allowed']);
        }
    } else {
        echo json_encode(['message' => 'Attachment file is required']);
    }
}

$conn->close();
?>
