<?php

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once 'config.php';

// $host = "localhost";
// $db_name = "careerenergeek";
// $username = "una";
// $password = "unaivan";

// $conn = new mysqli($host, $username, $password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

try {
    if (isset($_GET['loker_id'])) {
        $loker_id = intval($_GET['loker_id']);

        // Fetch the job name (namaposisi) along with applicants
        $stmt = $conn->prepare("
            SELECT l.namaposisi, a.id, a.name, a.email, a.phone, a.portfolio_link, a.attachment, a.created_at, a.shortresume, a.desiredsalary
            FROM applications a
            JOIN loker l ON a.loker_id = l.id
            WHERE l.id = ?
        ");

        if (!$stmt) {
            throw new Exception("Failed to prepare statement: " . $conn->error);
        }

        $stmt->bind_param("i", $loker_id);
        $stmt->execute();

        $result = $stmt->get_result();
        $applicants = [];
        $jobName = "";

        while ($row = $result->fetch_assoc()) {
            if (empty($jobName)) {
                $jobName = $row['namaposisi']; // Store the job name once
            }
            $applicants[] = $row;
        }

        $stmt->close();
        $conn->close();

        echo json_encode(["jobName" => $jobName, "applicants" => $applicants]);
    } else {
        echo json_encode(["error" => "Invalid or missing loker_id"]);
    }
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
