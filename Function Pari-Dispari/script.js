/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/


// Utente sceglie pari o dispari
const sceltaUtente = prompt("Scegli pari o dispari:");
console.log(sceltaUtente);

// Utente inserisce un numero da 1 a 5
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
console.log(numeroUtente);


// funzione che genera numero randon
let newRandomComputer = numComputer(1, 5);
console.log( newRandomComputer);

function numComputer(min,max) {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    return randomNum;
    
}

// funzione per sommare il numero dell'utente e numero del computer
const somma = newRandomComputer + numeroUtente;

console.log("La somma è " + somma);



// Funzione per determinare se un numero è pari o dispari
function ParioDispari(somma) {
    
    let risultato;
    // check se numero è pari o dispari
    if (somma % 2 === 0) {
        risultato = "pari";
    
    } else {
        risultato = "dispari";
    }

    

    let vincitore;
    // check per risultato vincitore
    if (risultato === sceltaUtente) {
        vincitore = "Hai vinto";

    } else {
        vincitore ="Hai perso";

    }

    // Restituisci il risultato e il vincitore
    return { risultato, vincitore };
}

/* Chiamata alla funzione e visualizzazione del risultato
let risultatoParioDispari = ParioDispari(somma);
console.log("La somma è " + risultatoParioDispari);*/

// Visualizzazione del risultato
let { risultato, vincitore } = ParioDispari(somma, sceltaUtente);
alert("La somma è " + risultato + ". " + vincitore);
console.log("La somma è " + risultato + ". " + vincitore);



