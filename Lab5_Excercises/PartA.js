<div>
<button type = "button"> Click Me!</button>
<button type = "button" id = "mybutton"> Click Me!</button>
</div>

function myFunction(){
    alert("Hello!")
}

function mOver(some_tag) {
    some_tag.innerHTML = "Thank You";
    some_tag.style.color = "blue";
}

function mOut(some_tag) {
    some_tag.innerHTML = "Mouse Over Me";
    some_tag.style.color = "orange";
}