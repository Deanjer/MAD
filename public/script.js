
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//modal 2


var modal2 = document.getElementById("myModal2");


var btn2 = document.getElementById("myBtn2");


var span2 = document.getElementsByClassName("close")[1];


btn2.onclick = function() {
modal2.style.display = "block";
}

span2.onclick = function() {
modal2.style.display = "none";
}


window.onclick = function(event) {
if (event.target == modal2) {
modal2.style.display = "none";
}
}

var modal3 = document.getElementById("myModal3");


var btn3 = document.getElementById("myBtn3");


var span3 = document.getElementsByClassName("close")[2];


btn3.onclick = function() {
modal3.style.display = "block";
}


span3.onclick = function() {
modal3.style.display = "none";
}


window.onclick = function(event) {
if (event.target == modal3) {
modal3.style.display = "none";
}
}
//script.js
let pointsElement = document.getElementById("points");
let points = 0;
pointsElement.innerHTML = points;

if (localStorage.getItem("points") != null) {
  points = localStorage.getItem("points");
  pointsElement.innerHTML = points;
}

function addPoints() {
  points = parseInt(points) + 10;
  localStorage.setItem("points", points);
  pointsElement.innerHTML = points;
}