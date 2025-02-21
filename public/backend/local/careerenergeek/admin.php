<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
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

// Handle GET request: Fetch users
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $result = $conn->query("SELECT id, username, email, role FROM admin_users");

    if ($result) {
        $users = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($users);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to fetch users."]);
    }
}

// Handle POST request: Create new admin user
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'];
    $email = $data['email'];
    $password = $data['password'];
    $role = $data['role'];

    if (empty($username) || empty($email) || empty($password) || empty($role)) {
        http_response_code(400);
        echo json_encode(["message" => "All fields are required"]);
        exit();
    }

    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $stmt = $conn->prepare("INSERT INTO admin_users (username, email, password, role) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $username, $email, $hashed_password, $role);

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode(["message" => "User created successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to create user"]);
    }

    $stmt->close();
}

// Handle DELETE request: Delete user
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    if (isset($_GET['id'])) {
        $userId = intval($_GET['id']); // Get the user ID from the URL

        // Ensure a valid user ID
        if ($userId > 0) {
            // Delete user from the database
            $stmt = $conn->prepare("DELETE FROM admin_users WHERE id = ?");
            $stmt->bind_param("i", $userId);

            if ($stmt->execute()) {
                echo json_encode(["message" => "User deleted successfully"]);
            } else {
                http_response_code(500);
                echo json_encode(["message" => "Failed to delete user"]);
            }

            $stmt->close();
        } else {
            http_response_code(400);
            echo json_encode(["message" => "User ID is required"]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "User ID is required"]);
    }
}

// Handle PUT request: Edit user details
if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    $user_id = $data['id'];
    $username = $data['username'];
    $email = $data['email'];
    $role = $data['role'];

    if (empty($user_id) || empty($username) || empty($email) || empty($role)) {
        http_response_code(400);
        echo json_encode(["message" => "All fields are required"]);
        exit();
    }

    $stmt = $conn->prepare("UPDATE admin_users SET username = ?, email = ?, role = ? WHERE id = ?");
    $stmt->bind_param("sssi", $username, $email, $role, $user_id);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(["message" => "User updated successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to update user"]);
    }

    $stmt->close();
}

// Handle POST request: Reset user password
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['reset'])) {
    $data = json_decode(file_get_contents("php://input"), true);
    $user_id = $data['id'];

    if (empty($user_id)) {
        http_response_code(400);
        echo json_encode(["message" => "User ID is required"]);
        exit();
    }

    $default_password = "3n3rg33kloker";
    $hashed_password = password_hash($default_password, PASSWORD_BCRYPT);

    $stmt = $conn->prepare("UPDATE admin_users SET password = ? WHERE id = ?");
    $stmt->bind_param("si", $hashed_password, $user_id);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(["message" => "Password reset successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to reset password"]);
    }

    $stmt->close();
}

$conn->close();
?>
