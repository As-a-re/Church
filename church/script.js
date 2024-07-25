// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;

            if (email && message) {
                alert('Thank you for your message. We will get back to you soon!');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});