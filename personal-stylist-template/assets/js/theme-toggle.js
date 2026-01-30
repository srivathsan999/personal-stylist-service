/* 
 * ANTIGRAVITY - Personal Stylist Template
 * Theme Toggle Script (Dark Mode / Light Mode)
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('#theme-toggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Check for saved user preference, if any, on load
    const currentTheme = localStorage.getItem("theme");
    
    if (currentTheme == "dark") {
        document.body.setAttribute('data-theme', 'dark');
    } else if (currentTheme == "light") {
        document.body.removeAttribute('data-theme');
    } else if (prefersDarkScheme.matches) {
        // Fallback to system preference if no manual selection
        document.body.setAttribute('data-theme', 'dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function() {
            let theme = "light";
            if (document.body.getAttribute('data-theme') !== 'dark') {
                document.body.setAttribute('data-theme', 'dark');
                theme = "dark";
            } else {
                document.body.removeAttribute('data-theme');
            }
            localStorage.setItem("theme", theme);
        });
    }
});
