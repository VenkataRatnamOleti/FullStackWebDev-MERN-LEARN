let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let highestScore = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
        levelUp();
    }
});

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}



function gameFlash(btn){
    btn.classList.add("game-flash");
    setTimeout(function(){
        btn.classList.remove("game-flash")
    }, 500);
}

function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash")
    }, 500);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        highestScore = Math.max(highestScore,level-1);
        document.querySelector("body").style.backgroundColor = "red";
        h3.innerHTML = `Game Over! your Score was <b>${level-1}</b>.<br> Your Highest Score is ${highestScore} <br> Press any key to start.`;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },500);

        reset(); 
    }
}

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}

function btnPress(){
    if(started){
        let btn = this;
        userFlash(btn);

        userColor = btn.getAttribute("id");
        userSeq.push(userColor);
        checkAns(userSeq.length-1);
    }
}