let choices = document.querySelectorAll('.choice');

let userScore = 0;
let compScore = 0;

let message = document.querySelector('#msg');
let messageBox = document.querySelector('#msg-box');

let userscorePara = document.querySelector('#user-score');
let compscorePara = document.querySelector('#comp-score');

let gencompChoice = (() => {
    let options = ['snake','water','gun'];
    idx = Math.floor(Math.random()*3);
    return options[idx];
});

let drawGame = ( () => {
    message.innerText = `It's a Draw. Play again`;
    messageBox.style.backgroundColor = 'darkblue';
});

let showWin = ( (userWin,userChoice,compChoice) => {
    if(userWin){
        message.innerText = `You Win! your ${userChoice} beats ${compChoice}` ;
        messageBox.style.backgroundColor = 'green';
        userScore++;
        userscorePara.innerText = userScore;
    }
    else{
        message.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        messageBox.style.backgroundColor = 'red';
        compScore++;
        compscorePara.innerText = compScore;
    }
});

let playgame = ( (userChoice) => {
    let compChoice = gencompChoice();
    if(userChoice === compChoice){
        drawGame();
    } 
    else{
        let userWin;
        if(userChoice == 'snake'){
            userWin = (compChoice == 'gun')? false:true;
        }
        else if(userChoice == 'water'){
            userWin = (compChoice == 'snake')? false:true;
        }
        else{
            userWin = (compChoice == 'water')? false:true;
        }
        showWin(userWin,userChoice,compChoice);
    }
});

choices.forEach((choice) => {
    
    choice.addEventListener('click',() =>{
        let userChoice = choice.getAttribute('id');
        playgame(userChoice);
    });
});
