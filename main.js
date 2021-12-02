const playerX = "X";
const playerO = "O";
var nextPlayer = playerX;
var activeGame = document.getElementById("spielfeld");
activeGame.disable = false;

const winConditions = [
    [0, 1, 2],
    [1, 4, 7],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function main() {
    let cells = document.getElementsByClassName("cell");
    for (const cell of cells) {
        cell.addEventListener("click", function () {
            if (activeGame.disable) {
                return;
            }
            if (isValidInput(this)) {
                printField(this);
                checkWin();
                changePlayer();
            }
        });
    }
}
main();

function printField(cell) {
    cell.innerText = nextPlayer;
}

function changeH2(nextPlayer) {
    let uebersicht = document.getElementById("changePlayer");
    uebersicht.innerHTML = (`Spieler ${nextPlayer} ist am Zug`);
}

function changePlayer() {
    if (nextPlayer === playerX) {
        nextPlayer = playerO;
    } else {
        nextPlayer = playerX;
    }
    changeH2(nextPlayer);
}

function isValidInput(cell) {
    return cell.innerText === "";
}

function checkWin() {
    const players = [playerX, playerO];
    let   fields  = [];

    for (let i = 0; i < 9; i++) {
        const field = document.getElementById("field_" + i);
        fields[i] = (field.innerText || "").trim() + field.id.split("_")[1];
    }

    for (const player of players) {
        for (const condition of winConditions) {
            for (const i in condition) {
                if (fields.indexOf(player + condition[i]) == -1) {
                    break;
                }
                if (i == condition.length -1) {
                    activeGame.disable = true;
                    setTimeout(winMessage, 10, player);
                }
            }
        }
    }
}

function winMessage(player) {
    document.getElementById("wm").setAttribute("id", "popUp");
    document.getElementById("pu").setAttribute("id", "winMessage");
    document.getElementById("winMessage").innerText = `Spieler ${player} hat gewonnen!`;
}

function restart() {
    let btn = document.getElementById("restart-game");
    btn.addEventListener("click", function () {
        window.location.reload();
    })
}
restart();

