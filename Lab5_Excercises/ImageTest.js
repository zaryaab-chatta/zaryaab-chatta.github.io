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