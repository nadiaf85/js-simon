// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer
// di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice
// quanti e quali dei numeri da indovinare sono stati individuati.

let numeriArray = [];
let contenitoreNumeri = document.getElementById("contenitore_numeri");


function creaNumeriRandom(){   

    while(numeriArray.length < 5)
    {
        let nuovoNumero = (Math.floor(Math.random()* 100 + 1));
              
        if( !numeriArray.includes( nuovoNumero ) )
        {
            numeriArray.push(nuovoNumero); 
        }
        container.innerHTML += `<div id="contenitore_numeri">${numeriArray[i]}</div>`;
    } 
}

//Creo funzione con timer

setTimeout(memorizza,3000);

function memorizza(){
    let numeriUtente = [];
    for(let i=0; i<5; i++){
        let utenteNumero = parseInt(prompt("inserisci un numero")); //chiedo all'utente di inserire un numero

        if (utenteNumero == numeriArray[i]){
            numeriUtente.push(utenteNumero);
            console.log(utenteNumero);

        } else {
            console.log(utenteNumero);
        }
    }
}