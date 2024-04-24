function getComputerChoice (){
    const choice = ['rock', 'paper', 'scissor'];
    const computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection){
    
    let result; 
     
    if(playerSelection === computerSelection){
        result = "It's a tie!!'";
    }
    else if(
        (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissor') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'paper')
    ){
        result = "You WIN!";
        playerScore++;

    }
    else{
        result = "You LOSE!";
        computerScore++;
    }


    updateScore();
    updateResult(result);

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            alert("You won the game");
        } else {
            alert("You lose the game");
        }
    }
    
}

const but1 = document.querySelector("#but1");
const but2 = document.querySelector("#but2");
const but3 = document.querySelector("#but3");

but1.addEventListener('click', fun => (
    playRound('rock',getComputerChoice())
));
but2.addEventListener('click', fun => (
    playRound('paper',getComputerChoice())
));
but3.addEventListener('click', fun => (
    playRound('scissor',getComputerChoice())
));

const result = document.querySelector("#result");

function updateResult(resultText){
    const para = document.createElement("p");
    para.textContent = resultText;
    result.appendChild(para);
}


const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");


function updateScore(){
    playerScoreDisplay.textContent = `Player Score : ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score : ${computerScore}`;
}



