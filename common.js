// Common components - Navbar, Footer, Mobile Menu

// Inject Navbar
function injectNavbar() {
    const navbarHTML = `
    <nav>
        <div class="nav-container">
            <a href="index.html" class="logo">Tagboananan Beach Resort</a>
            <ul class="nav-links">
                <li><a href="index.html#home">Home</a></li>
                <li><a href="booking.html">Book a Stay</a></li>
                <li><a href="beachpasses.html">Beach Passes</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="index.html#contact">Contact</a></li>
            </ul>
            <div class="hamburger" onclick="toggleMobileMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <div class="mobile-menu" id="mobileMenu">
        <ul>
            <li><a href="index.html#home" onclick="toggleMobileMenu()">Home</a></li>
            <li><a href="booking.html" onclick="toggleMobileMenu()">Book a Stay</a></li>
            <li><a href="beachpasses.html" onclick="toggleMobileMenu()">Beach Passes</a></li>
            <li><a href="about.html" onclick="toggleMobileMenu()">About</a></li>
            <li><a href="index.html#contact" onclick="toggleMobileMenu()">Contact</a></li>
        </ul>
    </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

// Inject Footer
function injectFooter() {
    const footerHTML = `
    <footer>
        <p>&copy; 2025 2RI Property Ventures Inc. All rights reserved.</p>
        <p>Tagboanan Beach Resort - Northern Cebu, Philippines</p>
    </footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Mobile menu toggle function (global scope)
window.toggleMobileMenu = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    if (mobileMenu && hamburger) {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
};

// Initialize common components when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        injectNavbar();
        injectFooter();
    });
} else {
    injectNavbar();
    injectFooter();
}
