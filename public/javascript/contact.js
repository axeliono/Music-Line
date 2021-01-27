// DOM variables
let sendEmailBtn = document.querySelector('#email-btn');
let contactName = document.querySelector('#contact-name').value.trim();
let emailText = document.querySelector('#email-text').value.trim();

// function that clears email / message when submit is clicked
function sendEmailHandler(event) {
    event.preventDefault();

    document.reload('/contact');

    window.prompt('Your message has been sent to Music Line! Our team will respond to your message within 24 hours.');
    console.log('hey');
}

sendEmailBtn.addEventListener('submit', sendEmailHandler);