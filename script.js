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

function getHumanChoice() {
  let humanEntry = prompt('rock, paper, scissors','');
  let humanChoice = humanEntry.toLowerCase()
  
  if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') {
    console.log('you picked', humanChoice);
    return humanChoice;

  } else {
    console.log('invalid');
    getHumanChoice();
  }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log('computer picked', computerChoice);
  if (humanChoice == computerChoice) {
    console.log('It\'s a tie!');
  } else if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper')) {
    console.log('You WIN!')
    humanScore++
    
  } else {
    console.log('You LOSE!')
    computerScore++

  } console.log(`You have ${humanScore} points, Computer has ${computerScore} points`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);