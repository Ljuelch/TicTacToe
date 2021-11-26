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

const winIDs = [
    [document.getElementById("field_0"), document.getElementById("field_1"), document.getElementById("field_2")],
    [document.getElementById("field_1"), document.getElementById("field_4"), document.getElementById("field_7")],
    [document.getElementById("field_6"), document.getElementById("field_7"), document.getElementById("field_8")],
    [document.getElementById("field_0"), document.getElementById("field_3"), document.getElementById("field_6")],
    [document.getElementById("field_1"), document.getElementById("field_4"), document.getElementById("field_7")],
    [document.getElementById("field_2"), document.getElementById("field_5"), document.getElementById("field_8")],
    [document.getElementById("field_0"), document.getElementById("field_4"), document.getElementById("field_8")],
    [document.getElementById("field_2"), document.getElementById("field_4"), document.getElementById("field_6")]
];

// console.log(winIDs);
// let länge = document.getElementById("field_0");
// console.log(länge.innerText.length);


//document.addEventListener("DOMContentLoaded", main());
main();
filterIdName();
// textLength();

// checkWin();

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


function filterIdName() {
    var name = document.getElementsByClassName('cell');
    for (let i = 0; i < name.length; i++) {
        name[i].onclick = function() {
            var idAusgabe = this.id;
            this.id;
            console.log(idAusgabe);
        }
    };
}

filterIdName();




// alle id winConditions in mehrdimensionales array packen 

// nach jedem click  durchlaufen und schauen ob alle strings gefüllt sind (mit.length?)
    // wenn nicht alle strings gefüllt sind dann weiter
    // wenn alle strings gefüllt 
        //mit else if checken ob alle den selben text haben 
            // wenn nicht selber text dann weiter 
            // wenn selber text dann Game win !!!!!

            // const winIDss = [
            //     [document.getElementById("field_0"), document.getElementById("field_1"), document.getElementById("field_2")],
            //     [document.getElementById("field_1"), document.getElementById("field_4"), document.getElementById("field_7")],
            //     [document.getElementById("field_6"), document.getElementById("field_7"), document.getElementById("field_8")],
            //     [document.getElementById("field_0"), document.getElementById("field_3"), document.getElementById("field_6")],
            //     [document.getElementById("field_1"), document.getElementById("field_4"), document.getElementById("field_7")],
            //     [document.getElementById("field_2"), document.getElementById("field_5"), document.getElementById("field_8")],
            //     [document.getElementById("field_0"), document.getElementById("field_4"), document.getElementById("field_8")],
            //     [document.getElementById("field_2"), document.getElementById("field_4"), document.getElementById("field_6")]
            // ];


// function textLength() {
//     for (let i = 0; i < winIDs.length; i++) {
//         winIDs[i].onClick = function() {
//             // let länge = document.getElementById("field_0");
//             if (winIDs.innerHTML === "X") {
//                 console.log("bin da");
//             }
//         }
//     };
// }
// textLength();


// function textLength() {
//     for (let i = 0; i < winIDs.length; i++) {
//         winIDs.forEach(kontrolle => {
            
//         });
//     };
// }
// textLength();








//let länge = document.getElementById("field_0");
//console.log(länge.innerHTML.length);


// function checkWin() {
//     winConditions.forEach(win => {
//         console.log("---");
//         win.forEach( id => {
//             let idAusgabe = "field_" + id;
//             console.log(idAusgabe);
//         })
//     });
// }

// function checkWin() {
//     winConditions.forEach(win => {
//         console.log("---");
//         win.forEach( id => {
//            // console.log("field_" + id);
//             if (("field_" + [0] == filterIdName())&& ("field_" + [1] == filterIdName()) && ("field_" + [2] == filterIdName())) {
//                 console.log("geil");
//             }else  {
//                // console.log("weiter");
//             }
//         })
//     });
// }



// class spielfeld element anklicken dann klasse ausgeben 
// durch winConditions loopen und jedes mal "feld_" +arraystelle  mit id vergleichen
// wenn a == b && b == c 
// dann return win 

