// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer
// di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice
// quanti e quali dei numeri da indovinare sono stati individuati.

let numeriArray = [];
let contenitoreNumeri = document.getElementById("contenitore");
let secondi = 20;
let tempo = document.getElementById("tempo_rimanente");


function creaNumeriRandom(){   

    while(numeriArray.length < 5)
    {
        let nuovoNumero = (Math.floor(Math.random()* 100 + 1));
              
        if( !numeriArray.includes( nuovoNumero ) )
        {
            numeriArray.push(nuovoNumero); 
        }
        contenitoreNumeri.innerHTML = numeriArray;
    } 
}

//Creo funzione con timer per memorizzare numeri

let timer = setInterval(function(){                          
    secondi--;                                                  
    if(secondi==0){                                              
        clearInterval(timer);                                
    }
    tempo.innerHTML = ("Memorizza:"+ secondi);  
}, 1000);


setTimeout(myFunction,3000);

function myFunction(){
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