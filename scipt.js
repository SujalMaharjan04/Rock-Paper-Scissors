const boxes = document.querySelectorAll(".box");
let playerScore = 0;
let computerScore = 0;
const msg = document.querySelector("#msg");
const playerScoreCount = document.querySelector("#player-Score");
const compScoreCount = document.querySelector("#comp-Score");
const resetBtn = document.querySelector("#reset-btn");

const showWinner = (playerWin, playerChoice, compChoice) => {
    if(playerWin) {
        console.log("You won!!");
        msg.innerText = `You won! Your ${playerChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        playerScore++;
        playerScoreCount.innerText = playerScore;
    } else {
        console.log("You lost!!");
        msg.innerText = `You lost! ${compChoice} beats your ${playerChoice}`;
        msg.style.backgroundColor = "Red";
        computerScore++;
        compScoreCount.innerText = computerScore;
    }
}
const draw = () => {
    console.log("The game was draw");
    msg.innerText = "The game was draw";
    msg.style.backgroundColor = "Black";
}
const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random(options) * 3);
    return options[index];
}
const playGame = (playerChoice) => {
    console.log("Player Chose = ",playerChoice);
    //Generating Computer Choices
    const compChoice = genCompChoice();
    console.log("Computer Chose = ",compChoice);

    if (playerChoice == compChoice) {
        //Draw Condition
        draw();
    }else {
        let playerWin = true;
        if (playerChoice === "Rock") {
            playerWin = compChoice === "Paper" ? false : true; 
        } else if(playerChoice === "Paper") {
            playerWin = compChoice === "Scissor" ? true : false;
        } else {
            playerWin = compChoice === "Rock" ? false : true;
        } 
        showWinner(playerWin, playerChoice, compChoice);
    }

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        let playerChoice = box.getAttribute("id");
        playGame(playerChoice);

    })
}); 


const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    msg.innerText = "Play your Move";
    msg.style.backgroundColor = "black";
    playerScoreCount.innerText = playerScore ;
    compScoreCount.innerText = computerScore;
}

resetBtn.addEventListener("click", resetGame);