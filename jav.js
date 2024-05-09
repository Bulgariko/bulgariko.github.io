document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;

        // Check if a username is provided
        if (username.trim() === '') {
            alert('Please enter a username to create an account.');
        } else {
            // Check if username is already registered
            const storedUsername = localStorage.getItem('username');
            if (storedUsername === username) {
                alert('Username ' + username + ' is already registered. Please choose a different username.');
            } else {
                // Store username in localStorage
                localStorage.setItem('username', username);

                // Simulated account creation process - Redirect to dashboard
                alert('Account created successfully! Redirecting to Dashboard...');
                // Redirect to dashboard.html after a short delay
                setTimeout(function() {
                    window.location.href = 'dashboard.html';
                }, 1); // Redirect after 2 seconds (2000 milliseconds)
            }
        }
    });

// Automatic login if username is stored
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        // Simulated automatic login process
        alert('Welcome back, ' + storedUsername + '! Automatically logging you in...');
        // Redirect to dashboard.html after a short delay
        setTimeout(function() {
            window.location.href = 'dashboard.html';
        }, 1); // Redirect after 2 seconds (2000 milliseconds)
    } else {
        // If no stored username, redirect to login page
        window.location.href = 'index.html';
    }
});