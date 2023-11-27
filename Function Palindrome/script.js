/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


// chiedere all'utente di inserire una parola
const parolaUtente = prompt("Inserisci una parola:");
console.log(parolaUtente);

// Chiamare la funzione per invertire la parola e stampare il risultato
const parolaInvertita = invertiParola(parolaUtente);
console.log("Parola invertita:", parolaInvertita);


// Funzione per invertire una parola
function invertiParola(parola) {
    return parola.split('').reverse().join('');

    let risultato;
    if (parolaInvertita === parolaUtente) {
        risultato = "La parola è palindroma"
        
    } else {
        risultato ="La parola non è palindroma"
    }

    // Restituisci il risultato
    return { risultato };
}

