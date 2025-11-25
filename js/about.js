const contactForm = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Display confirmation message on form submit
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    alert("Thank you for your message.")
});