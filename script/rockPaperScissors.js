let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let pilihanComp = Math.random();

  if (pilihanComp < 1 / 3) {
    return "Rock";
  } else if (pilihanComp < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper, or Scissors?");

  if (humanChoice === false || humanChoice === null) {
    alert("OK!");
  } else if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    alert("Input Invalid");
  } else {
    return humanChoice;
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    alert("You win! Paper beats rock.");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    alert("Computer Win! Scissors beats paper.");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    alert("Computer Win! Paper beats rock.");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    alert("You win! Rock beats scissors.");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    alert("You win! Scissors beats paper.");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    alert("Computer Win! Rock beats scissors.");
  } else {
    alert("It`s a tie!");
  }
}

function playGame() {
  const playerConfirm = confirm("Do you want to play Rock, Paper, Scissors?");

  if (playerConfirm === true) {
    alert("Enjoy the game!");

    for (let i = 0; i < 5; i++) {
      let humanChoice = getHumanChoice();
      let computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    }
  } else {
    alert("Ok, Goodbye!");
  }

  if (humanScore > computerScore) {
    alert(`Congratulations! You won the game!
    
    Your Score : ${humanScore}
    Computer Score : ${computerScore}`);
  } else if (computerScore > humanScore) {
    alert(`Congratulations! Computer won the game!
      
    Your Score : ${humanScore}
    Computer Score : ${computerScore}`);
  } else {
    alert("The game ended in a tie!");
  }
}

playGame();
