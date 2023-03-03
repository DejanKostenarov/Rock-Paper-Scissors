const rockBtn = document.getElementById("rockBtn");

const paperBtn = document.getElementById("paperBtn");

const scissorsBtn = document.getElementById("scissorsBtn");

let playerScore = document.querySelector(".player--score");

let computerScore = document.querySelector(".computer--score");

let result = document.getElementById("result");

let playerChoicePrint = document.getElementById("playerChoicePrint");

let cpuChoicePrint = document.getElementById("cpuChoicePrint");

const rockPaperScissorsArr = ["🤜", "✋", "✌"];

function computerChoice() {
  let indexPlay = Math.floor(Math.random() * rockPaperScissorsArr.length);

  let randomChoice = rockPaperScissorsArr[indexPlay];

  return randomChoice;
}

function addElement(value, element) {
  element.innerHTML = "";
  let result = document.createElement("p");
  result.innerText = value;
  element.appendChild(result);
}

rockBtn.addEventListener("click", function () {
  let cpuMove = computerChoice();
  if (cpuMove === "✋") {
    computerScore.innerText++;
    addElement(cpuMove, cpuChoicePrint);
  } else if (cpuMove === "✌") {
    playerScore.innerText++;
  }
});

paperBtn.addEventListener("click", function () {
  let cpuMove = computerChoice();
  if (cpuMove === "🤜") {
    playerScore.innerText++;
  } else if (cpuMove === "✌") {
    computerScore.innerText++;
    addElement(cpuMove, cpuChoicePrint);
  }
});

scissorsBtn.addEventListener("click", function () {
  let cpuMove = computerChoice();
  if (cpuMove === "🤜") {
    computerScore.innerText++;
    addElement(cpuMove, cpuChoicePrint);
  } else if (cpuMove === "✌") {
    playerScore.innerText++;
  }
});
