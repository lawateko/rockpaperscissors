function getComputerChoice() {
  const pilihanComp = Math.floor(Math.random() * (4 - 1) + 1);

  if (pilihanComp == 1) {
    return "Rock";
  } else if (pilihanComp == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  const pilihanHuman = prompt(
    "Enter your choices - (Rock, Paper, Scissors) : "
  );
  return pilihanHuman;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "It's a Tie!";
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanChoice++;
    return "You Win! Rock beats Scissors";
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanChoice++;
    return "You Win! Scissors beats Paper";
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanChoice++;
    return "You Win! Paper beats Rock";
  } else {
    computerChoice++;
    return `Computer Win! ${computerChoice} beats ${humanChoice}`;
  }
}
