// Get the loading screen element
const loadingScreen = document.querySelector('.loading-screen');

// Get the loading GIF image element
const loadingGif = document.querySelector('.loading-gif');

// Get the loading text element
const loadingText = document.querySelector('.loading-text');

// Set the loading screen to be visible
loadingScreen.style.display = 'flex';

// Add an event listener to the window load event
window.addEventListener('load', () => {
  // Simulate a loading process (e.g. loading data from an API)
  setTimeout(() => {
    // Hide the loading screen
    loadingScreen.style.display = 'none';
  }, 3000); // simulate a 3-second loading process
});

// Add an event listener to the loading GIF image
loadingGif.addEventListener('animationiteration', () => {
  // Change the loading text every 2 seconds
  loadingText.textContent = `Loading... ${Math.floor(Math.random() * 100)}%`;
});
