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
    const parolaInvertita = parola.split('').reverse().join('');
    
    return parolaInvertita;
    

}   


// if ed else per capire se parola è palindroma o meno 
    
let risultato;
if (parolaInvertita === parolaUtente) {
    risultato = "La parola è palindroma"
    alert("La parola è palindroma");
    console.log(risultato);

} else {
    risultato = "La parola non è palindroma"
    alert("La parola non è palindroma");
    console.log(risultato);
}
