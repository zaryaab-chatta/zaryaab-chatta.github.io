// This function handles form reset for the contact form
document.getElementById("contactForm").onreset = function() {
    // Optionally, you can clear localStorage or just reset the form fields
    console.log("Form has been reset.");
    // If you want to clear all localStorage (for testing purposes), uncomment below:
    // localStorage.clear();
    alert("The form has been reset.");
};