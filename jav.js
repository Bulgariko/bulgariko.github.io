document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        
        // Check if a username is provided
        if (username.trim() === '') {
            alert('Please enter a username to create an account.');
        } else {
            // Simulated account creation process - Redirect to dashboard
            alert('Account created successfully! Redirecting to Dashboard...');
            // Redirect to dashboard.html after a short delay
            setTimeout(function() {
                window.location.href = 'dashboard.html';
            }, 2000); // Redirect after 2 seconds (2000 milliseconds)
        }
    });
});