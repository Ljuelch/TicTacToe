const playerX = "X";
const playerO = "O";
var nextPlayer = playerX;

const winConditions = [
    [0, 1, 2],
    [1, 4, 7],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//document.addEventListener("DOMContentLoaded", main());
main();
checkWin();

function main() {
    let cells = document.getElementsByClassName("cell");
    Array.from(cells, cell => {
        cell.addEventListener("click", function () {
            if (isValidInput(this)) {
                printField(this);
                changePlayer();
            }
        });
    });
}

function printField(cell) {
    cell.innerText = nextPlayer;
}

function changePlayer() {
    if (nextPlayer === playerX) {
        nextPlayer = playerO;
        return;
    } 
    nextPlayer = playerX;
}

function isValidInput(cell) {
    return cell.innerText === "";
}

function checkWin() {

    winConditions.forEach(win => {
        console.log("check next Win");
        win.forEach( id => {
            console.log("field_" + id);
            console.log(document.getElementById("field_5"));
        })

    });
}

