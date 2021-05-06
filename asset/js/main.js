// Es:1 generatore password tramite concatenazione

/* var nome = prompt('Scrivi il tuo nome');
var cognome = prompt('scrivi il tuo cognome');
var colore = prompt('scrivi il tuo colore preferito');
var numero = 21;

var password = nome + cognome + colore + numero;
console.log(password); */



//Es:2 calcolare prezzo biglietto treno

/* var distanza = prompt("Quanti km devi percorrere?");
var eta = prompt('Qanti anni Hai?');

var prezzo = 0.21 * distanza;

var sconto20 = prezzo *20 /100;

var sconto40 = prezzo *40 /100;

if( eta < 18){
    prezzo = prezzo - sconto20;
    console.log(prezzo);
}else if ( eta > 65){
    prezzo = prezzo -sconto40;
    console.log(prezzo);
}else console.log(prezzo); */



// Es:3 verifica mail e gioco dadi

/* var utente = prompt("Scrivi la tua mail");
var mail = ["a@mail.it","b@mail.it","c@mail.it"]; // questo e un array
var verifica = false;
var accesso;

for ( i = 0; i < mail.length; i++){ // questo e un ciclo for 
    var email = mail[i];
    if( utente == email ){
        verifica = true;
    }
}
console.log(verifica);

if(verifica){
    accesso = "Benvenuto";
}else{
    accesso = "non puoi entrare";
}
console.log(accesso);
 */    

/* var utente = Math.ceil(Math.random()*6);
console.log(utente);
var pc = Math.ceil(Math.random()*6);
console.log(pc);
var vincitore;

if(utente == pc){
    vincitore = "ritenta";  
}else if (utente > pc){
    vincitore = "Hai vinto";
}else{
    vincitore = "Ha vinto il pc";
}
console.log(vincitore); */


//snak 2: verificare quale parola e piu lunga e ordinare per lunghezza
/* var parola1 = prompt("scegli una parola");
var parola2 = prompt("scegli una parola");

if( parola1.length == parola2.length){
    console.log("riprova");
    
}else if(parola1.length > parola2.length){
    console.log(parola2, parola1);
}else{
    console.log(parola1, parola2);
}
*/



//snak 3: fare inserire 10 volte un numero e sommarli
/* var somma = 0;
for (i = 0; i < 10; i++){
    var numero = Number(prompt("scrivi un numero"))
    somma = somma + numero;
}
console.log(somma);
*/



//snak 5: creare una array vuoto e chieder per 6 volte all'utente un numero, inserire nell'array solo i dispari
/* var array =[];

for (i = 0; i < 6; i++){

    var numeroUtente = Number(prompt("scegli u numero"));
    
    if( numeroUtente % 2 != 0){
    array.push(numeroUtente);
    }
}   

console.log(array); */



//snak 6: stampa il cubo dei primi N numeri dove N e un numero indicato dall'utente

//snak 7: stampa le potenze di 2 fino a mille                                                                                                                 

//snak 8: chiedi un numero a 4 cifre  e fai la somma di tutte le cifre che lo compongono


//snack1 in live

// time function es:1
//Il programma chiede all’utente quanti secondi mancano alla cottura della pasta. Dopo il tempo indicato, appare un alert().

/* var secondi = parseInt(prompt('quanti secondi mancano alla cottura della pasta?'));
console.log(secondi);

setTimeout(function(){
     alert('la pasta e cotta!')
}, secondi * 1000);
*/


// time function es:2
//Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"

/* var timer = 11;

var intervallo = setInterval(function(){

    if(timer === 0){
        alert('buon anno!');
        clearInterval(intervallo);
    }else{
        timer--;
    }
    document.getElementById('secondi').innerHTML = timer;

}, 1000);
 */
// time function es:3
// Cliccando su un pulsante, viene avviato un cronometro.
// Per fermare il cronometro, bisogna cliccare su un secondo pulsante.

var start = document.getElementById('start');
var fine = document.getElementById('stop');
var tempo = document.getElementById('tempo');

var intervallo;

start.addEventListener('click', function(){

    var secondi = 0;

    intervallo = setInterval(function(){
        secondi++;
        console.log(secondi);
        tempo.innerHTML = secondi;
    }, 1000);
});

fine.addEventListener('click', function(){

    clearInterval(intervallo);
});


