const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach( button => button.addEventListener("click", ()=> {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    
    checkWinner();
    resultText.textContent = `${result}`;
} ) );

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) +1;

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

function checkWinner(){
    if(player == computer){
        result = "Draw!"
    }

    else if(computer == "ROCK"){
        result = (player == "PAPER")? "You Win!" : "You Lose!"
    }

    else if(computer == "PAPER"){
        result = (player == "SCISSORS")? "You Win!" : "You Lose!"
    }

    else{ //computer == "SCISSORS"
        result = (player == "ROCK")? "You Win!" : "You Lose!"
    }

    switch (result) {
        case "You Win!":
            resultText.style.color = "green";
            break;

        case "You Lose!":
            resultText.style.color = "red";
            break;

        case "Draw!":
            resultText.style.color = "black";
            break;
    }
}