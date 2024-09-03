var r = document.querySelector(':root');
        
document.addEventListener('DOMContentLoaded', () => {
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// Check the current mode and update the button text accordingly
const updateButtonText = () => {
    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = 'Switch to Dark Mode';
    } else {
        toggleButton.textContent = 'Switch to Light Mode';
    }
};

// Add event listener for button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    updateButtonText();
});

// Initialize the button text
updateButtonText();
});