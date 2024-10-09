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


// Hover effect for navigation items
function hoverNav(item) {
    item.style.backgroundColor = '#444'; // Darker color on hover
}

function unhoverNav(item) {
    item.style.backgroundColor = ''; // Revert back to original background
}

// Show and hide the dropdown menu
function showMenu(item) {
    let dropdown = item.querySelector('.dropdown-menu');
    dropdown.style.display = 'block'; // Show dropdown menu
}

function hideMenu(item) {
    let dropdown = item.querySelector('.dropdown-menu');
    dropdown.style.display = 'none'; // Hide dropdown menu
}




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