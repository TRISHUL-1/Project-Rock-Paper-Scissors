let userScore = 0;
let sysScore = 0;

const userSrc = document.querySelector("#userScore");
const sysSrc = document.querySelector("#sysScore");

const msg = document.querySelector(".msg");

const choices = document.querySelectorAll(".choice");

const genSysChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randomNo = Math.floor(Math.random() * 3);
    return option[randomNo];
};

const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#480977";
};

const showWinner = (userWin, userChoice, sysChoice) => {
    if(userWin){
        msg.innerText = `You Win, your ${userChoice} beats ${sysChoice}`;
        userScore++;
        userSrc.innerText = userScore;
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = `You Lose, ${sysChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        sysScore++;
        sysSrc.innerText = sysScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const sysChoice = genSysChoice();
    console.log("sys choice = ",sysChoice);
    if(userChoice === sysChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = sysChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = sysChoice === "scissors" ? false : true;
        } else {
            userWin = sysChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, sysChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}); 