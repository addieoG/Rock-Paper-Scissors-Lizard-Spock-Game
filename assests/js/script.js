document.addEventListener("DOMContentLoaded", function () { });
const playerChoice = document.querySelector("#players-choice");
const computersChoice = document.querySelector("#computers-choice");
const playerSelection = document.querySelectorAll(".player-selection");
const displayResult = document.querySelector("#display-result");
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;

/**
 * Function runs the best of 3 game
 * Displays the players selection, computers selection and score board, 
 * alerts player of game type and alerts player of winner
 */
function bestOfThree() {
    alert("You Selected Best Of Three");
    playerSelection.forEach(button => button.addEventListener("click", () => {
        player = button.textContent;
        computerSelection();
        scoreBoard();
        playerChoice.textContent = `Player:${player}`;
        computersChoice.textContent = `Computer:${computer}`;
        displayResult.textContent = determineWinner();
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
        if (playerScore === 2)
            alert("Congratulations you win!!\nHit reset to play again!");
        if (computerScore === 2)
            alert("Sorry!\nYou lost this round!\nHit reset to try again!")
    }));
};

/**
 * Function runs the best of 5 game
 * Displays the players selection, computers selection and score board, 
 * alerts player of game type and alerts player of winner
 */
function bestOfFive() {
    alert("You Selected Best Of Five");
    playerSelection.forEach(button => button.addEventListener("click", () => {
        player = button.textContent;
        computerSelection();
        scoreBoard();
        playerChoice.textContent = `Player:${player}`;
        computersChoice.textContent = `Computer:${computer}`;
        displayResult.textContent = determineWinner();
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
        if (playerScore === 3)
            alert("Congratulations you win!!\nHit reset to play again!");
        if (computerScore === 3)
            alert("Sorry!\nYou lost this round!\nHit reset to try again!")
    }));
};

/**
 * Function runs the best of 7 game
 * Displays the players selection, computers selection and score board, 
 * alerts player of game type and alerts player of winner
 */
function bestOfSeven() {
    alert("You Selected Best Of Seven");
    playerSelection.forEach(button => button.addEventListener("click", () => {
        player = button.textContent;
        computerSelection();
        scoreBoard();
        playerChoice.textContent = `Player:${player}`;
        computersChoice.textContent = `Computer:${computer}`;
        displayResult.textContent = determineWinner();
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
        if (playerScore === 4)
            alert("Congratulations you win!!\nHit reset to play again!");
        if (computerScore === 4)
            alert("Sorry!\nYou lost this round!\nHit reset to try again!")
    }));
};

/**
 * function to generate computer response, generates a random int between 1 and 5 and returns a string
 */
function computerSelection() {
    const randNum = Math.floor(Math.random() * 5) + 1;

    switch (randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
        case 4:
            computer = "Lizard";
            break;
        case 5:
            computer = "Spock";
            break;
    }
};

/** 
 * logic statement that displays if you won, lost or it's a draw to the dom
*/
function determineWinner() {
    if ((player == "Rock" && (computer == "Scissors" || computer == "Lizard")) ||
        (player == "Paper" && (computer == "Rock" || computer == "Spock")) ||
        (player == "Scissors" && (computer == "Paper" || computer == "Lizard")) ||
        (player == "Lizard" && (computer == "Paper" || computer == "Spock")) ||
        (player == "Spock" && (computer == "Rock" || computer == "Scissors"))) {
        return "You Win"
    } else if ((computer == "Rock" && (player == "Scissors" || player == "Lizard")) ||
        (computer == "Paper" && (player == "Rock" || player == "Spock")) ||
        (computer == "Scissors" && (player == "Paper" || player == "Lizard")) ||
        (computer == "Lizard" && (player == "Paper" || player == "Spock")) ||
        (computer == "Spock" && (player == "Rock" || player == "Scissors"))) {
        return "Sorry you lose!"
    } else if (computer == player) {
        return "it's a tie"
    }
};

/** 
 * logic statement that determines if the player or the computer has won
*/
function scoreBoard() {
    if ((player == "Rock" && (computer == "Scissors" || computer == "Lizard")) ||
        (player == "Paper" && (computer == "Rock" || computer == "Spock")) ||
        (player == "Scissors" && (computer == "Paper" || computer == "Lizard")) ||
        (player == "Lizard" && (computer == "Paper" || computer == "Spock")) ||
        (player == "Spock" && (computer == "Rock" || computer == "Scissors"))) {
        playerScore++;
    } else if ((computer == "Rock" && (player == "Scissors" || player == "Lizard")) ||
        (computer == "Paper" && (player == "Rock" || player == "Spock")) ||
        (computer == "Scissors" && (player == "Paper" || player == "Lizard")) ||
        (computer == "Lizard" && (player == "Paper" || player == "Spock")) ||
        (computer == "Spock" && (player == "Rock" || player == "Scissors"))) {
        computerScore++;
    } else if (computer == player) {
        //do nothing 
    }
}
/** 
 * Function to reset scores and allow you to choose difficulty again. 
*/

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

}