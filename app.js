let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

boxes.forEach((box)=>{
box.addEventListener("click",()=>{

if(turnO){
box.innerText="O";
turnO=false;
}else{
box.innerText="X";
turnO=true;
}

box.disabled=true;
count++;

checkWinner();

if(count===9){
gameDraw();
}

});
});

const showWinner = (winner)=>{
msg.innerText = `Winner: ${winner} Congrats`;
msgContainer.classList.remove("hide");
disableBoxes();
}

const gameDraw = ()=>{
msg.innerText = "Game Draw";
msgContainer.classList.remove("hide");
}

const disableBoxes = ()=>{
for(let box of boxes){
box.disabled=true;
}
}

const enableBoxes = ()=>{
for(let box of boxes){
box.disabled=false;
box.innerText="";
box.classList.remove("winner");
}
}

const resetGame = ()=>{
turnO=true;
count=0;
enableBoxes();
msgContainer.classList.add("hide");
}

const checkWinner = ()=>{

for(let pattern of winPatterns){

let pos1 = boxes[pattern[0]].innerText;
let pos2 = boxes[pattern[1]].innerText;
let pos3 = boxes[pattern[2]].innerText;

if(pos1!="" && pos2!="" && pos3!=""){

if(pos1 === pos2 && pos2 === pos3){

boxes[pattern[0]].classList.add("winner");
boxes[pattern[1]].classList.add("winner");
boxes[pattern[2]].classList.add("winner");

showWinner(pos1);
}

}

}

}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);