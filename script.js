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
  if (humanChoice == "rock" && computerChoice == "rock") {
    curRoundResult.textContent = "Draw!";
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    curRoundResult.textContent = "You lose! Paper beats rock";
    computerScore++;
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    curRoundResult.textContent = "You win! Rock beats scissors";
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    humanScore++;
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    curRoundResult.textContent = "Draw!";
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    curRoundResult.textContent = "You win! Paper beats rock!";
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    humanScore++;
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    curRoundResult.textContent = "You lose! Scissors beats paper";
    computerScore++;
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    curRoundResult.textContent = "Draw!";
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    curRoundResult.textContent = "You lose! Rock beats scissors";
    computerScore++;
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    curRoundResult.textContent = "You win! Scissors beats paper";
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    humanScore++;
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  }
}
