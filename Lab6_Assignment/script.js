// This function handles form submission for the contact form
document.getElementById("contactForm").onsubmit = function(event) {
    // Prevent form from refreshing the page
    event.preventDefault();

    // Get the values from the form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const contactMethod = document.querySelector('input[name="contact-method"]:checked') ? document.querySelector('input[name="contact-method"]:checked').value : '';
    const newsletter = document.querySelector('input[name="newsletter"]:checked') ? 'Yes' : 'No';

    // Store values in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("subject", subject);
    localStorage.setItem("message", message);
    localStorage.setItem("contactMethod", contactMethod);
    localStorage.setItem("newsletter", newsletter);

    // Display a success message
    alert("Thank you for contacting us! Your message has been stored.");
};

// This function handles the reset button action
document.getElementById("contactForm").onreset = function() {
    // Clear the localStorage values (if desired)
    localStorage.clear();

    // Display a message to indicate form has been reset
    alert("Form has been reset and data cleared.");
};
