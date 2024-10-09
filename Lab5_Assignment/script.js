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


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
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