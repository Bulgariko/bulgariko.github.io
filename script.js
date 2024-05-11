document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.loader-wrapper img');
    let rotationCount = 0;

    // Function to start the spinning animation
    function startSpinning() {
        image.classList.add('spin');
    }

    // Function to stop the spinning animation
    function stopSpinning() {
        image.classList.remove('spin');
    }

    // Function to handle the end of each animation iteration
    function handleAnimationIteration() {
        rotationCount++;
        if (rotationCount >= 1) {
            // Redirect to 'home.html' after two full rotations
            window.location.href = 'create.html';
        }
    }

    // Add event listener to detect animation iteration
    image.addEventListener('animationiteration', handleAnimationIteration);

    // Start spinning after a delay (2 seconds in this example)
    setTimeout(() => {
        startSpinning();
    }, 2000); // 2 seconds delay
});