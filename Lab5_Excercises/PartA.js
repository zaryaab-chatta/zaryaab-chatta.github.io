function myFunction() {
    alert("Hello!");
}

function mOver(element) {
    element.innerHTML = "Thank You!";
    element.style.backgroundColor = "lightblue"; // Changes the background color on hover
}

function mOut(element) {
    element.innerHTML = "Mouse Over Here";
    element.style.backgroundColor = "white"; // Resets background color when mouse is out
}