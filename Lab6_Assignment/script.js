// This function handles form submission for the contact form
document.getElementById("contactForm").onsubmit = function(event) {
    // Prevent form from refreshing the page
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

// This function retrieves and displays all stored form submissions
function displayStoredData() {
    // Retrieve the submissions array from localStorage
    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    // Initialize an empty string to hold all the data
    let data = '';

    // Loop through each submission and build the display string
    submissions.forEach((submission, index) => {
        data += `
            <h3>Submission ${index + 1}:</h3>
            <strong>Name:</strong> ${submission.name} <br>
            <strong>Email:</strong> ${submission.email} <br>
            <strong>Phone:</strong> ${submission.phone} <br>
            <strong>Subject:</strong> ${submission.subject} <br>
            <strong>Message:</strong> ${submission.message} <br>
            <strong>Preferred Contact Method:</strong> ${submission.contactMethod} <br>
            <strong>Reason for Contact:</strong> ${submission.reason} <br>
            <strong>Newsletter Subscription:</strong> ${submission.newsletter} <br>
            <hr>
        `;
    });

    // Display the data inside the webpage element
    document.getElementById("storedData").innerHTML = data;
}

// Call the function to display stored data when the page loads
window.onload = function() {
    displayStoredData();
};
