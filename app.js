let boxes = document.querySelectorAll(".box");
let result_display = document.querySelector("#result_display");
let reset = document.querySelector("#reset");
let mode = document.querySelector("#bulb-image");
let body = document.querySelector(".container");
let turnofX = true;
let gameOver = false;
let turnofwhite = false;

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "" && !gameOver) {
            if (turnofX) {
                box.innerHTML = "X";
                turnofX = false;
            } else {
                box.innerHTML = "O";
                turnofX = true;
            }
            checkWinner();
        }
    });
});

let patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (let pattern of patterns) {
        let p1 = boxes[pattern[0]].innerHTML;
        let p2 = boxes[pattern[1]].innerHTML;
        let p3 = boxes[pattern[2]].innerHTML;
        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                result_display.innerText = "Winner is: " + p1;
                gameOver = true;
                return;
            }
        }
    }

    if (Array.from(boxes).every(box => box.innerHTML !== "")) {
        result_display.innerText = "It's a draw!";
        gameOver = true;
    }
}

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
    });
    result_display.innerText = "";
    gameOver = false;
    turnofX = true;
});

mode.addEventListener("click", () => {
    if (turnofwhite) {
        body.style.backgroundColor = "black";
        result_display.style.color = "white";
        boxes.forEach(box => {
            box.style.color = "aliceblue";
            box.style.backgroundColor = "black";
            box.style.border = "2px solid white";
        });
        turnofwhite = false;
    } else {
        body.style.backgroundColor = "white";
        result_display.style.color = "black";
        boxes.forEach(box => {
            box.style.color = "brown";
            box.style.backgroundColor = "white";
            box.style.border = "2px solid black";
        });
        turnofwhite = true;
    }
});

