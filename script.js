function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  if (randomNumber == 1) {
    computerChoice = "rock";
  } else if (randomNumber == 2) {
    computerChoice = "paper";
  } else if (randomNumber == 3) {
    computerChoice = "scissors";
  } else {
    console.log('something went wrong');
  } return computerChoice;
}

getComputerChoice();

