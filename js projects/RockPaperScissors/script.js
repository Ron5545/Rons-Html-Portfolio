
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    computerTurn();
    player = button.textContent;
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${checkWinner()}`;



}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner() {
    if (player == computer) {
        return "Draw!";
    }

    else if (computer == "ROCK") {
        return (player == "PAPER") ? "You won" : "You lost"
    }

    else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You won" : "You Lost"
    }

    else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You Won" : "You Lost"
    }

    else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You Won" : "You Lost"
    }
}