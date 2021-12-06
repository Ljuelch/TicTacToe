const playerX = "X";
const playerO = "O";
var currentPlayer = playerX;
var activeGame = document.getElementById("spielfeld");

activeGame.disable = false;

const status = {
    nothing: "",
    win: "win",
    tie: "tie"
}

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

function restart() {
    document.getElementById("restartGame").addEventListener("click", function () {
        location.reload();
    })
}

function reset() {
    document.getElementById("resetGame").addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    })
}

function main() {
    document.getElementById("ties").innerText = localStorage.getItem("ties");
    document.getElementById("winsPlayerX").innerText = localStorage.getItem("winsPlayerX");
    document.getElementById("winsPlayerO").innerText = localStorage.getItem("winsPlayerO");
    let cells = document.getElementsByClassName("cell");
    for (const cell of cells) {
        cell.addEventListener("click", function () {
            if (activeGame.disable || !isValidInput(this)) {
                return;
            }
            printField(this);
            checkWin();
            changePlayer();
        });
    }
}

function isValidInput(cell) {
    return cell.innerText === "";
}

function printField(cell) {
    cell.innerText = currentPlayer;
}

function changePlayer() {
    currentPlayer = playerX === currentPlayer ? playerO : playerX;
    announcePlayer(currentPlayer);
    localStorage.setItem("player", currentPlayer);
}

function announcePlayer(nextPlayer) {
    document.getElementById("messageBox").innerHTML = (`Spieler ${nextPlayer} ist am Zug`);
}

function checkWin() {
    let ties = 0;
    for (const condition of winConditions) {
        let solution = hasWinner(condition);
        if (solution === status.win) {
            activeGame.disable = true;
            incrementWinningPlayer(solution);
            let message = `Spieler ${currentPlayer} hat gewonnen!`;
            setTimeout(endGameMessage, 10, message);
            return;
        }
        if (solution === status.tie) {
            ties++;

        }

    }
    if (ties === winConditions.length) {
        let countTies = localStorage.getItem("ties");
        localStorage.setItem("ties", ++countTies + "");
        document.getElementById("ties").innerText = countTies;
        activeGame.disable = true;
        let message = "Unentschieden!";
        setTimeout(endGameMessage, 10, message);
    }
}

function incrementWinningPlayer() {
    let player = "winsPlayer" + currentPlayer;
    let countWinningPlayer = localStorage.getItem(player);
    localStorage.setItem(player, ++countWinningPlayer + "");
    document.getElementById(player).innerText = countWinningPlayer;
}

function hasWinner(condition) {
    let previousValue = "";
    let state = status.win;
    for (const targetFieldIndex in condition) {
        let value = document.getElementById("field_" + condition[targetFieldIndex]).innerText;

        if (value === "") {
            state = status.nothing;
            continue;
        }

        if (previousValue !== "" && previousValue !== value) {
            return status.tie;
        }

        previousValue = value;
    }
    return state;
}

function endGameMessage(message) {
    document.getElementById("messageBox").innerText = message;
}

function setLocalStorage (item) {
    if (localStorage.getItem(item) == null) {
        localStorage.setItem(item, "0");
    }
}

setLocalStorage("ties");
setLocalStorage("winPlayerX");
setLocalStorage("winPlayerO");

main();
restart();
reset();

