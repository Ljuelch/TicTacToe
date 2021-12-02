
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