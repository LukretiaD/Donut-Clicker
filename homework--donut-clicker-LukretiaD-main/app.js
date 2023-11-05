//donut count variables
let donutCount = 0;
let donutPerSec = 0;
let donutClick = 1;
let donutButtn = document.getElementById("donutButton");
let donutResult = document.getElementById("result")

//Autoclickers variables
let helpers = 0;
let helpersNum = 1;
let helpersCost = 100;
let ingred = 0;
let ingredNum = 1;
let ingredCost = 110;
let equip = 0;
let equipNum = 1;
let equipCost = 121;

//Get Modal For Nav
let modal = document.getElementById("bioModal");
//Get button that open modal
let bioButtn = document.getElementById("bioButton");
//Get element that close the modal
let bioClose = document.getElementsByClassName("close")[0];

//Iteration 1, Feature 1: Add donut count
donutButtn.onclick = function () {
  donutCount++;
  donutResult.inner = donutCount;
}


//All Auto clicker functions are similar.

//Iteration 1, Feature 2: Purchase first Auto Clicker with 100 donuts from donut count.
setInterval(function () {
  donutCount += donutPerSec;
  donutResult.innerHTML = donutCount;
}, 1000)

//Helpers Auto Clicker function
function buyHelpers() {

  if (donutCount >= helpersCost) {
//Subtract the donut count and add to Auto CLicker count.
    donutCount -= helpersCost;

    helpersCost *= 2;
    document.getElementById("helpersCost").innerText = helpersCost;

    donutPerSec += 1;
    document.getElementById("donutPerSec").innerText = donutPerSec;

//alerts if user doesn't have enough donuts to get a auto clicker.
  } else {
    alert("UH-OH! You don't have enough donuts!")
  }
}

//Iteration 1: Feature 3: The cost of each Auto CLicker goes up.
//Ingredients Auto Clicker
function buyIngredients() {

  if (donutCount >= ingredCost) {
    donutCount -= ingredCost;
    donutResult.innerHTML = donutCount;

    ingred++;
    document.getElementById("ingredientsNum").innerText = ingred;

    ingredCost *= 2;
    document.getElementById("ingredientsCost").innerText = ingredCost;

    donutPerSec += 2;
    document.getElementById("donutPerSec").innerText = donutPerSec;

//Iteration 1: Feature 4: Alerts if user doesn't have enough donuts to get a auto clicker.
  } else {
  alert("UH-OH! You don't have enough donuts!")
  }
}

//Iteration 1: Feature 5: **All Auto clickers function are similar** Active auto clickers affect the donut amount when clicked.
//Equipment Auto Clicker
function buyEquip() {

  if (donutCount >= equipCost) {
    donutCount -= equipCost;
    donutResult.innerHTML = donutCount;

    equip++;
    document.getElementById("equipmentNum").innerText = equip;

    equipCost *= 2;
    document.getElementById("equipmentCost").innerText = equipCost;

    donutPerSec += 3;
    document.getElementById("donutPerSec").innerText = donutPerSec;

//alerts if user doesn't have enough donuts to get a auto clicker.
  } else {
    alert("UH-OH! You don't have enough donuts!")
  }
}

//When the user clicks the button, opens up the modal.
bioButtn.onclick = function () {
  modal.style.display = "block";
}

//When the user click the "x", the modal will close.
bioClose.onclick = function () {
  modal.style.display = "none";
}

//When user click outside of modal, it will close.
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Company link opens in a pop up.
function company() {
  alert("Fred the Baker Baking Company is well known around the world for their amazing donuts! After years of making delicious bake goods, Fred the Baker is retiring!! But before he does, he wants everyone to experience making his amazing donuts through this game!");
}

//inspiration link opens in a new window.
function inspiration() {
  window.open("https://orteil.dashnet.org/cookieclicker/");
}

//github open in new window.
function github() {
  window.open("https://github.com/LukretiaD");
}

//Portfolio open in new window
function portfolio() {
  window.open("https://LukretiaD.github.io");
}

//Nav dropdown
//When user click on nav button, toggle between hiding and showing dropdown.
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Close the dropdown by clicking outside of it.
window.onclick = function (e) {
  if (!e.target.matches(".infobtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}



