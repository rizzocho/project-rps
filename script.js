const buttons = document.querySelectorAll("button");
const rock = document.querySelector("#btnRock");
const paper = document.querySelector("#btnPaper");
const scissors = document.querySelector("#btnScissors");
const logs = document.querySelector(".logs");
const humanTally = document.querySelector("#humanTally");
const computerTally = document.querySelector("#computerTally");
const hTally = document.createTextNode("You have 0 points");
const cTally = document.createTextNode("Computer has 0 points");
humanTally.appendChild(hTally);
computerTally.appendChild(cTally);

const rps = ["nothing", "rock", "paper", "scissors"];
const logText = ["you tie", "points", "noooooo"];
let computerChoice =() => Math.floor(Math.random() * 3) + 1;

rock.addEventListener("click", () => (playRound(1, computerChoice())));
paper.addEventListener("click", () => (playRound(2, computerChoice())));
scissors.addEventListener("click", () => (playRound(3, computerChoice())));


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    const roundPara = document.createElement("p");
    const resultPara = document.createTextNode("You tie");
    logs.appendChild(roundPara);
    roundPara.appendChild(resultPara);
    } else if (humanChoice - computerChoice === 1 || humanChoice - computerChoice === -2) {
      humanScore++;
      const roundPara = document.createElement("p");
      const resultPara = document.createTextNode("points");
      logs.appendChild(roundPara);
      roundPara.appendChild(resultPara);
      humanTally.textContent = `You have ${humanScore} points`;
      if (humanScore === 5) {
        youWin();
      }
  } else {
    computerScore++;
    const roundPara = document.createElement("p");
    const resultPara = document.createTextNode("nooooo!");
    logs.appendChild(roundPara);
    roundPara.appendChild(resultPara);
    computerTally.textContent = `Computer has ${computerScore} points`;
    if (computerScore === 5) {
      youLose();
    }
  }   
} 

function youWin() {
  const roundPara = document.createElement("p");
    const resultPara = document.createTextNode("Winner Winner Chicken Dinner!");
    logs.appendChild(roundPara);
    roundPara.appendChild(resultPara);
    buttons.forEach(button => button.style.display = "none");
}

function youLose() {
  const roundPara = document.createElement("p");
    const resultPara = document.createTextNode("La who sa her!");
    logs.appendChild(roundPara);
    roundPara.appendChild(resultPara);
    buttons.forEach(button => button.style.display = "none");
}