// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    
    // --- Navigation Logic ---
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const mobileMenu = document.getElementById('mobile-menu');

    /**
     * Shows a specific page and hides others. Updates the active state of navigation links.
     * @param {string} pageId The ID of the page to show (e.g., 'home-page').
     */
    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.add('hidden');
        });

        // Show the target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
        }

        // Update active state for all navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            }
        });

        // Scroll to the top of the page on navigation
        window.scrollTo(0, 0);
    }

    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default anchor behavior if it's just for navigation
            if (this.dataset.page) {
                e.preventDefault();
                const pageId = this.dataset.page;
                showPage(pageId);
                // Close mobile menu if it's open
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // --- Footer Year ---
    // Automatically set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // --- Form Submission Simulation ---
    const form = document.getElementById('club-form');
    const successMessage = document.getElementById('form-success-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting to a server

        // In a real application, you would send form data to a server here.
        // For this demo, we'll just simulate a successful submission.
        
        form.style.display = 'none'; // Hide the form
        successMessage.style.display = 'block'; // Show the success message
    });
});
