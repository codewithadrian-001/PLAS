// login.js

// Function to validate form inputs
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Username and password are required.');
        return false;
    }
    return true;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
        // Simulate form submission
        alert('Form submitted successfully!');
        // Here you can add your form submission logic (e.g., sending data to a server)
    }
}

// Attach the handleSubmit function to form
const form = document.getElementById('loginForm');
form.addEventListener('submit', handleSubmit);