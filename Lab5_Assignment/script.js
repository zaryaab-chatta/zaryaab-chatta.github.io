// Function to prompt the user for their name and display it
function promptForName() {
    let userName = prompt("Please enter your name:");

    // If a name is entered, display it in the HTML element
    if (userName) {
        document.getElementById("displayName").innerText = "Hello, " + userName + "!";
    } else {
        document.getElementById("displayName").innerText = "You didn't enter a name.";
    }
}


// Function to toggle dropdown menu on click
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the default anchor link behavior
        // Toggle the display of the dropdown menu
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });

    // Optional: Close dropdown if clicking outside of it
    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});




// Select the image by its ID
const image = document.getElementById('clickable-image');

// Set a variable to track whether the image is enlarged or not
let isEnlarged = false;

// Add a click event listener to the image
image.addEventListener('click', function() {
  if (isEnlarged) {
    // If the image is enlarged, shrink it back to the original size
    image.style.width = '300px'; // Original size
    isEnlarged = false; // Update the state
  } else {
    // If the image is not enlarged, make it larger
    image.style.width = '600px'; // Enlarged size
    isEnlarged = true; // Update the state
  }
});