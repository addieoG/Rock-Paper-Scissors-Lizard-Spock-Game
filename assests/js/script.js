const playerChoice = document.querySelector("#players-choice");
const computersChoice = document.querySelector("#computers-choice");
const playerSelection = document.querySelectorAll(".player-selection");
let player;
let computer;

playerSelection.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerSelection();
    playerChoice.textContent = `Player:${player}`;
    computersChoice.textContent = `Computer:${computer}`;

}));

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