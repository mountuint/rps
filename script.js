const rockBtn = document.querySelector("#rock-btn");

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector("#paper-btn");

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissors-btn");

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("Draw!");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats rock");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats scissors");
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("Draw!");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats rock");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats paper");
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("Draw!");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! Rock beats scissors");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats paper");
  }
}
