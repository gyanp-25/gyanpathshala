// Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Form Validation and Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!name) {
            alert('Please enter your name');
            return;
        }
        
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        if (!message) {
            alert('Please enter a message');
            return;
        }
        
        // If validation passes, show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Hamburger Menu Toggle (for mobile)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});