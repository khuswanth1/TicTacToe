let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#Reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#Msg");

let turnO = true; //playerX, playerO

//2d array:let arr =[[1,2,3],[2,3,5],[9,4,8],[7,6,0]] ;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = false;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) { //o turn
            box.innerHTML = "<h3><i>O</i></h3>";
            turnO = false;
        } else { //x turn
            box.innerHTML = "<h3><i>X</i></h3>";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newbtn.addEventListener("click", resetGame);
restbtn.addEventListener("click", resetGame);