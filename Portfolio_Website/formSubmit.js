// Handle form submission
document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;

    // Prepare form data
    const formData = new FormData(form);

    try {
        // Send form data to Formspree
        const response = await fetch("https://formspree.io/f/xdkopawz", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json',
            },
        });

        if (response.ok) {
            // Redirect to the Thank You page
            window.location.href = "https://zaryaab-chatta.github.io/Portfolio_Website/thank-you.html";
        } else {
            alert("There was an error submitting the form. Please try again.");
        }
    } catch (error) {
        alert("An unexpected error occurred. Please try again.");
    }
});
