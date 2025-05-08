<?php
$host = "localhost";
$user = "root"; // change as needed
$password = ""; // change as needed
$database = "book";

// Connect to database
$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert book info
if (isset($_POST['submit'])) {
    $acc_no = $_POST['accession_number'];
    $title = $_POST['title'];
    $authors = $_POST['authors'];
    $edition = $_POST['edition'];
    $publisher = $_POST['publisher'];

    $stmt = $conn->prepare("INSERT INTO book_info (AccessionNumber, Title, Author, Edition, Publishers) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $acc_no, $title, $authors, $edition, $publisher);
    $stmt->execute();
    echo "<p>Book added successfully!</p>";
}

// Search for book
$search_results = [];
if (isset($_POST['search'])) {
    $search_title = $_POST['search_title'];
    $stmt = $conn->prepare("SELECT * FROM book_info WHERE Title LIKE ?");
    $like = "%$search_title%";
    $stmt->bind_param("s", $like);
    $stmt->execute();
    $result = $stmt->get_result();
    $search_results = $result->fetch_all(MYSQLI_ASSOC);
}
?>