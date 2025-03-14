document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const resetColorBtn = document.getElementById('resetColorBtn');
    const container = document.querySelector('.container');
    const contactForm = document.getElementById('contactForm');
    const originalColor = container.style.backgroundColor || 'white';
    
    changeColorBtn.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        container.style.backgroundColor = randomColor;
    });
    
    resetColorBtn.addEventListener('click', function() {
        container.style.backgroundColor = originalColor;
    });
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        console.log('Form submitted with:', { name, email, message });
        alert(`Thank you, ${name}! Your message has been received.`);
        contactForm.reset();
    });
    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});