<?php
$allowed_origin = "http://localhost:5173";

header("Access-Control-Allow-Origin: $allowed_origin");
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
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Creating a new loker
    $data = json_decode(file_get_contents("php://input"), true);
    $namaposisi = $data['namaposisi'];
    $divisi = $data['divisi'];
    $deadline = $data['deadline'];
    $jobdeskripsi = $data['jobdeskripsi'];
    $techstack = $data['techstack'];
    $query = "INSERT INTO loker (namaposisi, divisi, deadline, jobdeskripsi, techstack) 
              VALUES ('$namaposisi', '$divisi', '$deadline', '$jobdeskripsi', '$techstack')";
    $conn->query($query);
    echo json_encode(['message' => 'Loker created successfully']);
} elseif ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    // Updating an existing loker
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'];
    $namaposisi = $data['namaposisi'];
    $divisi = $data['divisi'];
    $deadline = $data['deadline'];
    $jobdeskripsi = $data['jobdeskripsi'];
    $techstack = $data['techstack'];
    $query = "UPDATE loker SET namaposisi = '$namaposisi', divisi = '$divisi', 
              deadline = '$deadline', jobdeskripsi = '$jobdeskripsi', 
              techstack = '$techstack' WHERE id = $id";
    $conn->query($query);
    echo json_encode(['message' => 'Loker updated successfully']);
} elseif ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    // Deleting a loker
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'];
    $query = "DELETE FROM loker WHERE id = $id";
    $conn->query($query);
    echo json_encode(['message' => 'Loker deleted successfully']);
}


$conn->close();
?>
