// This function handles form submission
document.getElementById("myForm").onsubmit = function(event) {
    // Prevent form from refreshing the page
    event.preventDefault();

    // Get the values from the form elements
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    const preferences = Array.from(document.querySelectorAll('input[name="preferences"]:checked')).map(pref => pref.value);
    const comments = document.getElementById("comments").value;

    // Store values in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password); // This isn't secure in real-world applications!
    localStorage.setItem("gender", gender);
    localStorage.setItem("preferences", JSON.stringify(preferences)); // Store as JSON string
    localStorage.setItem("comments", comments);

    // Display a success message
    alert("Form data stored successfully!");

    // Optionally, clear the form after submission
    document.getElementById("myForm").reset();
};

// This function handles the reset button action
document.getElementById("myForm").onreset = function() {
    // Clear the localStorage values (if desired)
    localStorage.clear();

    // Display a message to indicate form has been reset
    alert("Form has been reset and data cleared.");
};
