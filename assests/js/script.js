//document.addEventListener("DOMContentLoaded")

const playerChoice = document.querySelector("#players-choice");
const computersChoice = document.querySelector("#computers-choice");
const playerSelection = document.querySelectorAll(".player-selection");
const displayResult = document.querySelector("#display-result");
let player;
let computer;
let result;
runGame()

/**
 * Displays the players selection, computers selection and score board
 */
function runGame() {
    playerSelection.forEach(button => button.addEventListener("click", () => {
        git
        player = button.textContent;
        computerSelection();
        playerChoice.textContent = `Player:${player}`;
        computersChoice.textContent = `Computer:${computer}`;
        displayResult.textContent = determineWinner();

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

/** logic statement to determine winner */
function determineWinner() {
    if (player == computer) {
        return "draw"
    } else {
        return "Broken code"
    }
};