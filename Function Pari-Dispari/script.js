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