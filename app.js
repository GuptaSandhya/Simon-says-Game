let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","green","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
    console.log("Game Started");
    started = true;

    levelUp();

    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 300);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);     
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);               //random btn choose
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    //console.log("curr level :", level);
    //let idx = level-1;        //fixed index

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);            // levelUp();
        }
        //console.log("same value");
    }else{
        h2.innerHTML = `Game Over! Your score is <b>${level}</b> <br>Press any key to start game.`;     //innerHTML: to add tags
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
    }

}

function btnPress() {
    //console.log(this);              //optional
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);         //current index
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


