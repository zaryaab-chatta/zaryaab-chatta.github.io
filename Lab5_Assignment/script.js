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

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle the dropdown menu when the Services link is clicked
    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor link behavior

        // Toggle dropdown visibility and opacity
        if (dropdownMenu.style.visibility === 'visible') {
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.opacity = '0';
        } else {
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.opacity = '1';
        }
    });

    // Close the dropdown if clicking outside of it
    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.opacity = '0';
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