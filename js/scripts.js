// Toggle icon and navbar for small screens
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle the dropdown when the menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggles the 'bx-x' class for changing the icon
    navbar.classList.toggle('active'); // Toggles the 'active' class to show or hide the navbar
};

// Highlight active section in navbar while scrolling
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to handle scrolling and highlight the active section
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Highlight the active section link in the navbar
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);
};

// Remove toggle icon and close navbar when clicking a nav link
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x'); // Resets the toggle icon to its default state
        navbar.classList.remove('active'); // Hides the dropdown menu
    };
});

// ScrollReveal configuration
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js for typing effect
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Mobile App Developer', 'Odoo Specialist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
