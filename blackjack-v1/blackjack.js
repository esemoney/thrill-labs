// initial declaration
var firstCard;
var secondCard;
let sum = firstCard + secondCard;

// booleans for determining winning conditions
let hasBlackjack = false;
let isAlive = true;


// beginning of inner text declarations
let message = "";
let messageEl = "time to play a round :)  ";
let plentyStories = "<h3>take a seat, and go!</h3> <p>Cards:</p> <p>Sum:</p>";

// button state variables
// let buttonState1 = "new game";
let buttonState2 = "start game";
let buttonState3 = "draw card";

function startGame() {

  document.getElementById("message-el").textContent = messageEl;
  document.getElementById("button-text").textContent = buttonState2;

  document.getElementById("plenty-stories").innerHTML = plentyStories;
  document.getElementById("button-text").textContent = buttonState3;

  drawCard();

}



function gameLogic() {
  if (sum <= 20) {
    message = "do you want to draw a new card?  ";
    console.log(message);
  } 
  
  else if (sum === 21) {
    message = "odogwu don get blackjack!!";
    console.log(message);
    hasBlackjack = true;
  } 
  
  else {
    isAlive = false;
    message = "sorry, you're out :( ";
    console.log(message);
  }
}