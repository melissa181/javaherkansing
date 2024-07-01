// bron: hulp van een vriendin gevraagd hoe ik de toppings op elkaar kan layeren (highestindex). ik begrijp dat ik met behulp van deze code de toppings op de pizza kan layeren door ze een hogere index te geven. //

var cheeseButton = document.getElementById("addCheese");
var cheeseImg = document.getElementById("cheese");
var highestIndex = 0;

cheeseButton.addEventListener("click", addCheese);

function addCheese() {
    highestIndex = highestIndex + 1;
    cheeseImg.style.zIndex = highestIndex;
    cheeseImg.style.display = "block";
}

var pepperoniButton = document.getElementById("addPepperoni");
var pepperoniImg = document.getElementById("pepperoni");

pepperoniButton.addEventListener("click", addPepperoni);

function addPepperoni() {
    highestIndex = highestIndex + 1;
    pepperoniImg.style.zIndex = highestIndex;
    pepperoniImg.style.display = "block";
}

var oliveButton = document.getElementById("addOlive");
var oliveImg = document.getElementById("olive");

oliveButton.addEventListener("click", addOlive);

function addOlive() {
    highestIndex = highestIndex + 1;
    oliveImg.style.zIndex = highestIndex;
    oliveImg.style.display = "block";
}

// Bron: https://chatgpt.com/ Prompt: how can i add a reset button to this code? Ik begrijp dat ik met deze code de toppings ongedaan kan maken door de z-index op -1 te zetten zodat de toppings niet meer zichtbaar zijn. //

var resetButton = document.getElementById("resetToppings");

resetButton.addEventListener("click", resetToppings);

function resetToppings() {
    cheeseImg.style.display = "none";
    cheeseImg.style.zIndex = -1;
    pepperoniImg.style.display = "none";
    pepperoniImg.style.zIndex = -1;
    oliveImg.style.display = "none";
    oliveImg.style.zIndex = -1;
    highestIndex = 0;
}


