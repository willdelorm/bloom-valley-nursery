const contactForm = document.getElementById('contact-form');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');

// Display confirmation message on form submit
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const messageDetails = {name: userName.value, email: userEmail.value, message: userMessage.value};
    localStorage.setItem("messageDetails", JSON.stringify(messageDetails));
    
    alert("Thank you for your message.")
});