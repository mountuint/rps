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
    console.log("You win the game! Congratulations!");
    gameResult.textContent = "You win the game! Congratulations!";
    curCompScore.textContent = "";
    curHumanScore.textContent = "";
    curRoundResult.textContent = "";

    humanScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    console.log("You lose the game!");
    gameResult.textContent = "You lose the game!";
    curCompScore.textContent = "";
    curHumanScore.textContent = "";
    curRoundResult.textContent = "";

    computerScore = 0;
    humanScore = 0;
  }
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());

  if (humanScore == 5) {
    console.log("You win the game! Congratulations!");
    gameResult.textContent = "You win the game! Congratulations!";
    curCompScore.textContent = "";
    curHumanScore.textContent = "";
    curRoundResult.textContent = "";

    humanScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    console.log("You lose the game!");
    gameResult.textContent = "You lose the game!";
    curCompScore.textContent = "";
    curHumanScore.textContent = "";
    curRoundResult.textContent = "";

    computerScore = 0;
    humanScore = 0;
  }
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());

  if (humanScore == 5) {
    console.log("You win the game! Congratulations!");
    gameResult.textContent = "You win the game! Congratulations!";
    curCompScore.textContent = "";
    curHumanScore.textContent = "";
    curRoundResult.textContent = "";

    humanScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    console.log("You lose the game!");
    gameResult.textContent = "You lose the game!";
    curCompScore.textContent = "";
    curHumanScore.textContent = "";
    curRoundResult.textContent = "";

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
    console.log("Draw!");
    curRoundResult.textContent = "Draw!";
    console.log(`Computer score is: ${computerScore}`);
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    console.log(`Human score is : ${humanScore}`);
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats rock");
    curRoundResult.textContent = "You lose! Paper beats rock";
    computerScore++;
    console.log(`Computer score is: ${computerScore}`);
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    console.log(`Human score is : ${humanScore}`);
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats scissors");
    curRoundResult.textContent = "You win! Rock beats scissors";
    console.log(`Computer score is: ${computerScore}`);
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    humanScore++;
    console.log(`Human score is : ${humanScore}`);
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("Draw!");
    curRoundResult.textContent = "Draw!";
    console.log(`Computer score is: ${computerScore}`);
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    console.log(`Human score is : ${humanScore}`);
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats rock");
    curRoundResult.textContent = "You win! Paper beats rock!";
    console.log(`Computer score is: ${computerScore}`);
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    humanScore++;
    console.log(`Human score is : ${humanScore}`);
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats paper");
    curRoundResult.textContent = "You lose! Scissors beats paper";
    computerScore++;
    console.log(`Computer score is: ${computerScore}`);
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    console.log(`Human score is : ${humanScore}`);
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("Draw!");
    curRoundResult.textContent = "Draw!";
    console.log(`Computer score is: ${computerScore}`);
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    console.log(`Human score is : ${humanScore}`);
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! Rock beats scissors");
    curRoundResult.textContent = "You lose! Rock beats scissors";
    computerScore++;
    console.log(`Computer score is: ${computerScore}`);
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    console.log(`Human score is : ${humanScore}`);
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats paper");
    curRoundResult.textContent = "You win! Scissors beats paper";
    console.log(`Computer score is: ${computerScore}`);
    curCompScore.textContent = `Computer score is: ${computerScore}`;
    humanScore++;
    console.log(`Human score is : ${humanScore}`);
    curHumanScore.textContent = `Human score is : ${humanScore}`;
  }
}
