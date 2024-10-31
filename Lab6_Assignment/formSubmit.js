// This function handles form submission for the contact form
document.getElementById("contactForm").onsubmit = function(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Retrieve previous submissions from localStorage (if any)
    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    // Get the current form values
    const submission = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        contactMethod: document.querySelector('input[name="contact-method"]:checked') ? document.querySelector('input[name="contact-method"]:checked').value : '',
        reason: document.getElementById("reason").value,
        newsletter: document.querySelector('input[name="newsletter"]:checked') ? 'Yes' : 'No'
    };

    // Add the new submission to the array
    submissions.push(submission);

    // Store the updated submissions array in localStorage
    localStorage.setItem("submissions", JSON.stringify(submissions));

    // Display a success message
    alert("Thank you for contacting us! Your message has been stored.");
};
