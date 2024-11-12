const rock = document.querySelector("#btnRock");
const paper = document.querySelector("#btnPaper");
const scissors = document.querySelector("#btnScissors");

let computerChoice =() => Math.floor(Math.random() * 3) + 1;

rock.addEventListener("click", () => (playRound(1, computerChoice())));
paper.addEventListener("click", () => (playRound(2, computerChoice())));
scissors.addEventListener("click", () => (playRound(3, computerChoice())));

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  
  console.log('you picked', humanChoice, 'computer picked', computerChoice);
  if (humanChoice === computerChoice) {
    console.log('It\'s a tie!');
  } else if (humanChoice - computerChoice === 1 || humanChoice - computerChoice === -2) {
    console.log('You win');
    humanScore++;
  } else {
    console.log('You LOSE');
    computerScore++;
  } console.log(`You have ${humanScore} points, Computer has ${computerScore} points`);
} 


// function playGame() {
// // const humanSelection = getHumanChoice();
// // const computerSelection = getComputerChoice();

// // for (let i = 1; i <= 5; i++) {
// //   console.log(`round ${i}`)
// //   playRound(getHumanChoice(), getComputerChoice());
// // } console.log(`Final Score - You ${humanScore}, Computer ${computerScore}`)

// // if (humanScore > computerScore) {
// //   console.log('You Win!');
// // } else if (humanScore == computerScore) {
// //   console.log('It\'s a tie.');
// // } else {
// //   console.log('You LOSE!!!');
// // }

// }

// playGame()