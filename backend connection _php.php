<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = ""; // Use your MySQL password
$dbname = "user_auth";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle signup form submission
if (isset($_POST['signup'])) {
    $name = $_POST['name'];
    $phone_number = $_POST['phone_number'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Encrypt the password

    // Insert the data into the users table
    $sql = "INSERT INTO users (name, email, phone_number, password) VALUES ('$name', '$email', '$phone_number', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Signup successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Handle login form submission
if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the email exists
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch the user data
        $row = $result->fetch_assoc();
        // Verify the password
        if (password_verify($password, $row['password'])) {
            echo "Login successful!";
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "No user found with this email!";
    }
}

// Close the database connection
$conn->close();
?>
