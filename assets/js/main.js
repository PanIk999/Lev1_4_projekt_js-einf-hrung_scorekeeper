
let scoreHomeTotal=document.querySelector("#score1");

console.log(scoreHomeTotal);
let score = 0;
function addH1(){
    score++;
    scoreHomeTotal.innerHTML = score;
}
function addH2(){
    score += 2;
    scoreHomeTotal.innerHTML = score;
}
function addH3(){
    score +=3;
    scoreHomeTotal.innerHTML = score;
}

let scoreAwayTotal=document.querySelector("#score2");

console.log(scoreAwayTotal);
let score2 = 0;
function addA1(){
    score2++;
    scoreAwayTotal.innerHTML = score2;
}
function addA2(){
    score2 += 2;
    scoreAwayTotal.innerHTML = score2;
}
function addA3(){
    score2 +=3;
    scoreAwayTotal.innerHTML = score2;
}

console.log(scoreHomeTotal);
// document.querySelector(("#score1")).innerHTML = ("00");

function reset(){
    document.querySelector(("#score1")).innerHTML = (00);
    document.querySelector(("#score2")).innerHTML = (00);
}
