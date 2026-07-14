let CompScore = 0;
let UserScore = 0;
let gameOver = false;
const choices = document.querySelectorAll(".choice");

const userScorePara = document.getElementById("UserScore");
const compScorePara = document.getElementById("CompScore");
const resetBtn = document.querySelector(".reset-btn");


resetBtn.addEventListener("click", () => {
    console.log("btn is clicked");
    gameOver = false;
UserScore = 0;
CompScore = 0;
userScorePara.innerText = 0;
compScorePara.innerText = 0;

msg.innerText = "Game was reset! Play next move";
});

const showWinner = (userWin) =>{
if(userWin){
    UserScore++;
    userScorePara.innerText  = UserScore;
    msg.innerText = "Congratulations! You win";
    msg.style.backgroundColor = "green";
}else{
CompScore++;
compScorePara.innerText = CompScore;
msg.innerText = "Sorry! You Lose";
msg.style.backgroundColor = "red";
}

if(UserScore===5|| CompScore===5){
    gameOver = true;
    if(UserScore === 5){
    msg.innerText = `You Won this Game! ${UserScore}-${CompScore}`
   }
   else{
    msg,innerText = `YOU lost this Game! ${UserScore}-${CompScore}`
   }
}


}


const genCompChoice  = () => {
    const options = ["rock", "paper", "scissor"];
   const randIdx  = Math.floor(Math.random () * 3);
   return options[randIdx];

}

const drawGame =  () =>{
    console.log("game was draw");
    msg.innerText = "Game was draw! ? Try Again";

} 

const playGame = (userChoice, compChoice) =>{
    if(gameOver){
        return;
    }
    if(userChoice===compChoice){
    drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "scissor" ? true : false
        }else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }else{
            userWin  = compChoice === "rock" ? true : false;
        }
        showWinner(userWin);

    }

}

choices.forEach((choice) =>{ 
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice= choice.getAttribute("id");
        console.log("user choice",userChoice);
            compChoice = genCompChoice();
            console.log("comp choice", compChoice)
            playGame(userChoice, compChoice);
        
    });
});




