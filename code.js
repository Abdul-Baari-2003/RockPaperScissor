function getComputerChoice (){
    const choice = ['rock', 'paper', 'scissor'];
    const computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

function play(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        return "It's a tie!";
    }
    else if(
        (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissor') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'paper')
    ){
        return "You Win!";
    }
    else{
        return "You Lose!";
    }
}

const playerSelection = prompt("Enter your choice");
const computerSelection = getComputerChoice();

function playGame(){
    console.log(play(playerSelection, computerSelection));
    console.log(play(playerSelection, computerSelection));
    console.log(play(playerSelection, computerSelection));
    console.log(play(playerSelection, computerSelection));
    console.log(play(playerSelection, computerSelection));
}

playGame();
