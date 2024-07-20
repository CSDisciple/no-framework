const body = document.body;
const darkModeToggle = document.getElementById('darkModeToggle');

// Check for saved theme preference or default to light mode
const isDarkMode = localStorage.getItem('darkMode') === 'true';
body.classList.toggle('dark-mode', isDarkMode);

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save theme preference
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});