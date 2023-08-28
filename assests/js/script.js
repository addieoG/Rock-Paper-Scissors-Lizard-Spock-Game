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
runGame()



/**
 * Displays the players selection, computers selection and score board
 */
function runGame() {
    playerSelection.forEach(button => button.addEventListener("click", () => {
        player = button.textContent;
        computerSelection();
        playerChoice.textContent = `Player:${player}`;
        computersChoice.textContent = `Computer:${computer}`;
        displayResult.textContent = determineWinner();
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
        scoreBoard();



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
        return "Result!! draw!"
    } else {
        return "Broken code"
    }
};

function scoreBoard() {
    if ((player == "Rock" && (computer == "Scissors" || computer == "Lizard")) ||
        (player == "Paper" && (computer == "Rock" || computer == "Spock")) ||
        (player == "Scissors" && (computer == "Paper" || computer == "Lizard")) ||
        (player == "Lizard" && (computer == "Paper" || computer == "Spock")) ||
        (player == "Spock" && (computer == "Rock" || computer == "Scissors"))) {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if ((player == "Rock" && (computer == "Scissors" || computer == "Lizard")) ||
        (computer == "Paper" && (player == "Rock" || player == "Spock")) ||
        (computer == "Scissors" && (player == "Paper" || player == "Lizard")) ||
        (player == "Lizard" && (computer == "Paper" || computer == "Spock")) ||
        (player == "Spock" && (computer == "Rock" || computer == "Scissors"))) {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    }