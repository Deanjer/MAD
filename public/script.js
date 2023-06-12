//modal 1
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
//modal 3

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

//clicker functies
let pointsElement = document.getElementById("points");
let upgradeButton = document.getElementById("upgrade");
let points = 0;
let clickUpgradeAmount = 10;
let isUpgraded = false;

if (localStorage.getItem("points") != null) {
  points = parseInt(localStorage.getItem("points"));
  pointsElement.innerHTML = points;
}

if (localStorage.getItem("clickUpgradeAmount") != null) {
  clickUpgradeAmount = parseInt(localStorage.getItem("clickUpgradeAmount"));
}

if (localStorage.getItem("isUpgraded") != null) {
  isUpgraded = localStorage.getItem("isUpgraded") === "true";
}

pointsElement.innerHTML = points;

function addPoints() {
  points += clickUpgradeAmount;
  localStorage.setItem("points", points);
  pointsElement.innerHTML = points;
}
// zorgt ervoor dat als de uprade gekocht is je de prijs niet meer ziet en niet nog een keer kan kopen
function upgradeClickAmount() {
  if (!isUpgraded && points >= 100) {
    points -= 100;
    clickUpgradeAmount += 10;
    localStorage.setItem("points", points);
    localStorage.setItem("clickUpgradeAmount", clickUpgradeAmount);
    pointsElement.innerHTML = points;
    upgradeButton.disabled = true;

    isUpgraded = true;
    localStorage.setItem("isUpgraded", isUpgraded);

    upgradeButton.textContent = "Upgraded";
    document.getElementById("upgradeCost").textContent = ""; 
  }
}


if (isUpgraded) {
  upgradeButton.disabled = true;
  upgradeButton.textContent = "Upgraded";
  document.getElementById("upgradeCost").textContent = ""; 
} else {
  upgradeButton.disabled = false;
  upgradeButton.textContent = "Upgrade";
  document.getElementById("upgradeCost").textContent = "Upgrade Cost: 100 points"; 
}

// Verwijderd de opgelsagen data > goed om te kunnen testen
localStorage.clear();

upgradeButton.addEventListener("click", upgradeClickAmount);


