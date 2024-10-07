let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let msg = document.querySelector(".msg");
let msgcont = document.querySelector(".msg-conatiner");
let newbtn = document.querySelector(".new-btn");


var turnO = true;   //player O
var count = 0;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgcont.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log(box);
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let iswinner = checkWinner();
        if(count == 9 && !iswinner){
            gameDraw();
        }
    });
});


const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcont.classList.remove("hide");
    disableBoxes();
};


const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  
  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableBoxes();
  };
  
  const checkWinner = () => {
    for (let pattern of winpatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };
  
  newbtn.addEventListener("click", resetGame);
  resetbtn.addEventListener("click", resetGame);