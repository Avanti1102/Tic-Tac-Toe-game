
let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset-btn");
let newgamebtn = document.querySelector(".new-game-btn");
let msgContainer = document.querySelector(".winner")
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winningPos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{
    turn0 = true;
    count=0;
    enableBtns();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinners();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw=()=>{
    msg.innerText = `Draw`;
    msgContainer.classList.remove("hide");
    disableBtns();
};

const enableBtns = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const disableBtns = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) =>{
   msg.innerText = `Congratulations! Winner is ${winner}` ;
   msgContainer.classList.remove("hide");
   disableBtns();
};

let checkWinners = () => {
    for(let Wpos of winningPos){
        let pos1  =  boxes[Wpos[0]].innerText;
        let pos2  =  boxes[Wpos[1]].innerText;
        let pos3  =  boxes[Wpos[2]].innerText;

        if(pos1 != "" &&  pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner", pos1);

                showWinner(pos1);
                return true;
            }
        }
    }
};

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);