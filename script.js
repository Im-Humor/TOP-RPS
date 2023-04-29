function getComputerChoice() {
    choiceNum = Math.floor(Math.random() * 3);
    choiceArray = ["Rock", "Paper", "Scissors"]
    return choiceArray[choiceNum]
}

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    const winString = "Congratulations, you won!";
    const tieString = "You have tied your opponent! Try again!";
    const loseString = "You lost! Try again!";
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerWins += 1;
        return(winString);
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerWins += 1;
        return(winString);
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerWins += 1;
        return(winString);
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        return(tieString);
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        return(tieString);
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        return(tieString);
    }
    else {
        computerWins += 1;
        return(loseString);
    }
}

const buttons = document.querySelectorAll('button');

const game = (event) => {
    console.log(playRound(event.target.textContent, getComputerChoice()))
    const playerWinCount = document.querySelector('.player-win-count');
    const cpuWinCount = document.querySelector('.cpu-win-count');
    const winner = document.querySelector('.winner');
    playerWinCount.textContent = playerWins;
    cpuWinCount.textContent = computerWins;
    if (playerWins >= 5) {
        winner.textContent = 'Player wins!';
        buttons.forEach(button => button.removeEventListener('click', game));
    }
    else if (computerWins >= 5) {
        winner.textContent = "CPU wins!";
        buttons.forEach(button => button.removeEventListener('click', game));
    }
}

buttons.forEach(button => button.addEventListener('click', game));