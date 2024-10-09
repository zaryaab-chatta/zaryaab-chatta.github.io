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