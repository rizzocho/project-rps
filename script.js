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
    // console.log(`round ${i} to griffindor`)
    humanScore++
    
  } else {
    // console.log('You LOSE!')
    computerScore++

  } console.log(`You have ${humanScore} points, Computer has ${computerScore} points`);
}

function playGame() {
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

for (let i = 1; i <= 5; i++) {
  console.log(`round ${i}`)
  playRound(getHumanChoice(), getComputerChoice());
} console.log(`Final Score - You ${humanScore}, Computer ${computerScore}`)

if (humanScore > computerScore) {
  console.log('You Win!');
} else if (humanScore == computerScore) {
  console.log('It\'s a tie.');
} else {
  console.log('You LOSE!!!');
}

}

playGame()