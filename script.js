const gameStateContainer = document.querySelector("#game-state-container");

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const gameResult = document.querySelector("#game-result");
const curCompScore = document.querySelector("#current-computer-score");
const curHumanScore = document.querySelector("#current-human-score");
const resetBtn = document.querySelector("#reset-btn");
const curRoundResult = document.querySelector("#current-round-result");

let humanScore = 0;
let computerScore = 0;

resetBtn.addEventListener("click", () => {
  curCompScore.textContent = "";
  curHumanScore.textContent = "";
  curRoundResult.textContent = "";
  gameResult.textContent = "";
  computerScore = 0;
  humanScore = 0;
});

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());

  if (humanScore == 5) {
    gameResult.textContent = "You win the game! Congratulations!";
    curCompScore.textContent = "";
    curHumanScore.textContent = "";
    curRoundResult.textContent = "";
    rockBtn.disabled = true;

    humanScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    gameResult.textContent = "You lose the game!";
    curCompScore.textContent = "";
    curHumanScore.textContent = "";
    curRoundResult.textContent = "";
    rockBtn.disabled = true;

    computerScore = 0;
    humanScore = 0;
  }
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());

  if (humanScore == 5) {
    gameResult.textContent = "You win the game! Congratulations!";
    curCompScore.textContent = "";
    curHumanScore.textContent = "";
    curRoundResult.textContent = "";
    paperBtn.disabled = true;

    humanScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    gameResult.textContent = "You lose the game!";
    curCompScore.textContent = "";
    curHumanScore.textContent = "";
    curRoundResult.textContent = "";
    paperBtn.disabled = true;

    computerScore = 0;
    humanScore = 0;
  }
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());

  if (humanScore == 5) {
    gameResult.textContent = "You win the game! Congratulations!";
    curCompScore.textContent = "";
    curHumanScore.textContent = "";
    curRoundResult.textContent = "";
    scissorsBtn.disabled = true;

    humanScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    gameResult.textContent = "You lose the game!";
    curCompScore.textContent = "";
    curHumanScore.textContent = "";
    curRoundResult.textContent = "";
    scissorsBtn.disabled = true;

    computerScore = 0;
    humanScore = 0;
  }
});

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    curRoundResult.textContent = "Draw!";
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if ((humanChoice == "rock" && computerChoice == "scissors")
    || (humanChoice == "paper" && computerChoice == "rock") 
    || (humanChoice == "scissors") && (computerChoice == "paper")) {
    curRoundResult.textContent = "You win!";
    humanScore++;
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    curHumanScore.textContent = `Human score is : ${humanScore}`;
    } else {
    curRoundResult.textContent = "You lose!";
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    curHumanScore.textContent = `Human score is : ${humanScore}`;
    }
}
