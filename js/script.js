
document.addEventListener('DOMContentLoaded', function() {


    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
  
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation errors
            let errors = [];
            
            // Check if name is empty
            if (name === '') {
                errors.push('Please enter your full name');
            }
            
            // Check if email is empty or invalid
            if (email === '') {
                errors.push('Please enter your email address');
            } else if (!isValidEmail(email)) {
                errors.push('Please enter a valid email address (e.g., name@domain.com)');
            }
            
            // Check if message is empty
            if (message === '') {
                errors.push('Please enter your message');
            }
            
            // If there are errors, show them and stop form submission
            if (errors.length > 0) {
                event.preventDefault(); // Stop form from submitting
                alert('⚠️ Please fix the following errors:\n\n• ' + errors.join('\n• '));
            } else {
                // If no errors, show success message
                event.preventDefault(); // Prevent actual submission
                alert('✅ Thank you, ' + name + '! Your message has been sent successfully. I\'ll get back to you soon!');
                this.reset();
            }
        });
    }
    
    
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

  
    // Create a dark mode toggle button and add it to the page
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = '🌙 Dark Mode';
    toggleBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        background: #2c3e50;
        color: white;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        z-index: 999;
        transition: all 0.3s;
    `;
    document.body.appendChild(toggleBtn);
    
    // Toggle dark mode when button is clicked
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Change button text and style based on mode
        if (document.body.classList.contains('dark-mode')) {
            toggleBtn.textContent = '☀️ Light Mode';
            toggleBtn.style.background = '#f8f9fa';
            toggleBtn.style.color = '#333';
        } else {
            toggleBtn.textContent = '🌙 Dark Mode';
            toggleBtn.style.background = '#2c3e50';
            toggleBtn.style.color = 'white';
        }
    });

 
    // Get current hour (0-23)
    const currentHour = new Date().getHours();
    let greeting = '';
    
    if (currentHour < 12) {
        greeting = '🌅 Good Morning';
    } else if (currentHour < 17) {
        greeting = '☀️ Good Afternoon';
    } else {
        greeting = '🌙 Good Evening';
    }
    
    // Find the hero section and add a greeting
    const heroContent = document.querySelector('.hero-content h1');
    if (heroContent) {
        // Add greeting as a small tag above the main heading
        const greetingTag = document.createElement('span');
        greetingTag.textContent = greeting;
        greetingTag.style.cssText = `
            display: block;
            font-size: 1.2rem;
            font-weight: normal;
            margin-bottom: 10px;
            opacity: 0.9;
        `;
        heroContent.parentNode.insertBefore(greetingTag, heroContent);
    }


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

       //CONSOLE WELCOME MESSAGE
    console.log('%c🚀 Welcome to My Portfolio Website!', 'font-size: 20px; font-weight: bold; color: #3498db;');
    console.log('%cBuilt with ❤️ for ITGY 401 Final Project', 'font-size: 14px; color: #2c3e50;');

}); 
