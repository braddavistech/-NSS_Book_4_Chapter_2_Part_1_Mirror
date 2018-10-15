let inputBox = document.getElementById("message");
inputBox.addEventListener("keyup", mirror);
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");

function mirror () {
  leftBox.innerHTML = inputBox.value;
  rightBox.innerHTML = inputBox.value;
};