<?php
// Enable CORS for development
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once 'config.php';


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $id = intval($_GET['id']);

        // Prepare and execute SQL query
        $query = "SELECT * FROM loker WHERE id = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $job = $result->fetch_assoc();
            echo json_encode($job);
        } else {
            echo json_encode(["message" => "Job not found."]);
        }

        $stmt->close();
    } else {
        echo json_encode(["message" => "Job ID is required."]);
    }
} else {
    echo json_encode(["message" => "Invalid request method."]);
}

// Close the database connection
$conn->close();
?>
