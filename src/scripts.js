const myBtn = document.getElementById("myBtn");
const myDiv = document.getElementById("myDiv");

myBtn.addEventListener("click", function() {
    myDiv.innerHTML = "You pressed the button!";
});