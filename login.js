document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Retrieve stored user details
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }

        form.reset(); // Clear form inputs
    });

    // Save user details upon account creation
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
        document.getElementById('username').value = storedUsername;
        document.getElementById('password').value = storedPassword;
    }
});