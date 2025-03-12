document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar ul li a');
    const sections = document.querySelectorAll('section, .section');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('class');
            }
        });

        navbarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
        contactForm.reset();
    });

    // Add event listeners for navigation links
    document.querySelector('.navbar a[href="Home"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelector('.navbar a[href="About"]').addEventListener('click', function(event) {
        event.preventDefault();
        const aboutSection = document.querySelector('.about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.navbar a[href="Contact us"]').addEventListener('click', function(event) {
        event.preventDefault();
        const contactSection = document.querySelector('.contact-form');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.navbar a[href="https://mail.google.com/mail/u/0/#inbox"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.open('https://mail.google.com/mail/u/0/#inbox', '_blank');
    });

    document.querySelector('.navbar a[href="index.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        alert('You have been logged out.');
        window.location.href = 'index.html';
    });
});


// login page and register page
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = 'index1.html'; // Redirect to the main page after login
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            window.location.href = 'index2.html'; // Redirect to the register page
        });
    }

    const loginPageBtn = document.getElementById('login-btn');
    const registerPageBtn = document.getElementById('register-btn');

    if (loginPageBtn) {
        loginPageBtn.addEventListener('click', function() {
            window.location.href = 'index.html'; // Redirect to the login page
        });
    }

    if (registerPageBtn) {
        registerPageBtn.addEventListener('click', function() {
            window.location.href = 'index2.html'; // Redirect to the register page
        });
    }
});