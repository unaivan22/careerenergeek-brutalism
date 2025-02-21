<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data) {
        error_log("Error decoding JSON input: " . json_last_error_msg());
        echo json_encode(["message" => "Invalid JSON input"]);
        exit();
    }

    $userId = $data['userId'];
    $password = password_hash($data['password'], PASSWORD_BCRYPT);

    $stmt = $conn->prepare("UPDATE admin_users SET password = ? WHERE id = ?");
    if (!$stmt) {
        error_log("Error preparing SQL statement: " . $conn->error);
    }

    $stmt->bind_param("si", $password, $userId);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(["message" => "Password reset successfully"]);
    } else {
        error_log("SQL execution error: " . $stmt->error);
        http_response_code(500);
        echo json_encode(["message" => "Failed to reset password"]);
    }

    $stmt->close();
} else {
    error_log("Invalid request method: " . $_SERVER['REQUEST_METHOD']);
}


$conn->close();
?>