const heading = document.getElementById("heading");

const redBtn = document.getElementById("red-btn");
const blueBtn = document.getElementById("blue-btn");
const greenBtn = document.getElementById("green-btn");

redBtn.addEventListener("click", function() {
    heading.style.color = "red";
});

blueBtn.addEventListener("click", function() {
    heading.style.color = "blue";
});

greenBtn.addEventListener("click", function() {
    heading.style.color = "green";
});