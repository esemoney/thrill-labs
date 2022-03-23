// initial declaration
var firstCard;
var secondCard;
let sum = firstCard + secondCard;

// booleans for determining winning conditions
let hasBlackjack = false;
let isAlive = true;


function startGame() {
  console.log("the game is the game")
  let rules = document.getElementById("rules-id");
  rules.innerHTML = "<h2>the rules are simple</h2> <p>you roll the die twice to pick two cards. the sum of your cards is called a <b>HAND</b>. if your hand is 21, you get <b>BLACKJACK</b> and the game ends with you as the winner. If your hand is less than 21, you can roll two more times to stand a chance to get 21. if however, your hand exceeds 21, you <b>BUST</b>. this means you have lost and the game is over.</p> <h3>try getting a 21!</h3>";

  let startGameButton = document.getElementById("button-text");
  startGameButton.innerText = "BEGIN"

}

