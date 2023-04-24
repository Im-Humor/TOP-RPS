function getComputerChoice() {
    choiceNum = Math.floor(Math.random() * 3);
    choiceArray = ["Rock", "Paper", "Scissors"]
    return choiceArray[choiceNum]
}

function playRound(playerSelection, computerSelection) {
    const winString = "Congratulations, you won!";
    const tieString = "You have tied your opponent! Try again!"
    const loseString = "You lost! Try again!"
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return(winString);
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return(winString);
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
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
        return(loseString);
    }
}

function game() {
    console.log(playRound(prompt("Do you select rock, paper, or scissors?"), getComputerChoice()));
}

game()
game()
game()
game()
game()