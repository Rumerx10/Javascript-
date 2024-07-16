let score = JSON.parse(localStorage.getItem('score')) ||  {wins:0, lose: 0, ties:0};        

function computerMove(){
    let cMove = Math.random();
    if(cMove>=0 && cMove<1/3){ return 'rock';}
    else if(cMove>=1/3 && cMove<2/3){ return 'paper';}
    else if(cMove>=2/3 && cMove<1){ return 'scissors';}
}

function updateScore(){
    document.querySelector('.score').innerHTML 
        = `Wins: ${score.wins}, Lose: ${score.lose}, Ties: ${score.ties}`;   
}

let isAutoPlaying = false;
let intervalId;
function autoPlay(){
    let autoPlayBtnElement = document.querySelector('.auto-play-btn');
    if(autoPlayBtnElement.innerText==='Auto Play'){
        autoPlayBtnElement.innerHTML = 'Stop Auto Play';
    }else{
        autoPlayBtnElement.innerHTML = 'Auto Play';
    }
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            let playerMove = computerMove();
            runGame(playerMove);
        },1000);
        isAutoPlaying = true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    
    
}


function runGame(playerMove){
    let result = '';
    const cMove = computerMove();
    if (playerMove==='rock'){
        if(cMove==='paper'){result='You Lose'}
        else if(cMove==='scissors'){result='You Win'}
        else if(cMove==='rock'){result='Tie'}
    }else if (playerMove==='paper'){
        if(cMove==='scissors'){result='You Lose'}
        else if(cMove==='rock'){result='You Win'}
        else if(cMove==='paper'){result='Tie'}
    }else if(playerMove==='scissors'){
        if(cMove==='paper'){result='You Win'}
        else if(cMove==='rock'){result='You Lose'}
        else if(cMove==='scissors') {result='Tie'}
    }

    if (result==='You Win'){ score.wins+=1}
    else if (result==='You Lose'){ score.lose+=1}
    else if (result==='Tie'){score.ties+=1}

    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.result').innerHTML = `${result}.`;
    document.querySelector('.moves').innerHTML = `You <img src='asset/images/${playerMove}-emoji.png' class='move-icon'> <img src='asset/images/${cMove}-emoji.png' class='move-icon'> Computer.`;
    updateScore();
}