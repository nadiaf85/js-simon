// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer
// di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice
// quanti e quali dei numeri da indovinare sono stati individuati.


//Creo numeri random

let numeriArray = [];
    for(let i=0;i < 5; i++){
    numeriArray[i]= (Math.floor(Math.random()* 100 + 1));
    }
    console.log(numeriArray);
    
let numeri = document.getElementById ("numeri");
numeri.innerHTML = numeriArray;

let contenitoreNumeri = document.getElementById("contenitore");
let secondi = 30;
let tempo = document.getElementById("tempo_rimanente");
tempo.innerHTML = secondi;

//Creo funzione con timer per memorizzare numeri

let timer = setInterval(function(){                          
    secondi--;                                                  
    if(secondi==0){                                              
        clearInterval(timer,numeriArray);
        numeri.innerHTML = "inserisci numeri";
        tempo.innerHTML = "tempo scaduto";
        setTimeout(myFunction,1000);                                
    }else{
    tempo.innerHTML = secondi;  
}}, 1000);


function myFunction(){
    let numeriUtente = [];
    let result = '';
    for(let i=0; i<5; i++){
        let utenteNumero = parseInt(prompt("inserisci un numero")); //chiedo all'utente di inserire un numero
        numeriUtente.push(utenteNumero);
        result=0;
        for (let i=0; i<numeriArray.length; i++){
        if(numeriArray.includes( numeriUtente[i])){
            result ++;
        }
    }
}
// console.log(numeriUtente,result);
// document.writeln ('Hai indovinato' + result + 'numeri');
};

let risultato = document.getElementById("risultato");
risultato.innerHTML = 'Hai indovinato' + ' '+'<br>' + risultato + ' ' +'<br>'+ 'numeri' ;