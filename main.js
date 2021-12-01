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
    window.alert(`Player ${player} hat gewonnen`);
    // hide fenster css definieren
}

function restart() {
    let btn = document.getElementById("restart-game");
    //let spielfeld = document.getElementsByClassName("spielfeld");
    btn.addEventListener("click", function () {
        window.location.reload();
    })
}
restart();


/*
// hier field + arrayname
function checkWin() {

    winConditions.forEach(win => {
        console.log("check next Win");
        win.forEach( id => {
            console.log("field_" + id);
            console.log(id);
            console.log(document.getElementById("field_" + id));
        })
    });
}

// hier id name aus html
function filterIdName() {
    var name = document.getElementsByClassName('cell');
    for (let i = 0; i < name.length; i++) {
        name[i].onclick = function() {
            var idAusgabe = this.id;
             console.log(idAusgabe);
        }
    };
}

filterIdName();
*/
// bei click id von feld in array hinzufügen
// wenn ein inneres array gefüllt ist (von selbem spieler) dann win

//  winConditions.setAttribute("");
/*
function checkWin() {

    const idAusgabe = this.id;
    winConditions.forEach(win => {
        win.forEach( id => {

            const cells = document.getElementsByClassName('cell');
            for (const name of cells) {
                const fieldContent = document.getElementById("field_" + id).innerText;
                const cellId = name.id.split("_")[1];
                if (id == cellId && fieldContent) {
                    console.log(id, fieldContent);
                    if (fieldContent == playerX) {
                        console.log("PlayerX");
                    } else if (fieldContent == playerO) {
                        console.log("PlayerO");
                    } else {
                        //weiter machen
                    }
                }



            };



            //console.log("field_" + id);
            // console.log(document.getElementById("field_5"));
        })
    });
}
*/