/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

// GIOCO DATI

//GENERARE NUMERO RANDOM DA 1 A 6

//numero per l'utente
const randomNumberUser = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberUser);

//numero per il computer
const randomNumberComputer = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberComputer);

//CONFRONTARE I 2 NUMERI E VEDERE PUNTEGGIO PIU' ALTO
//STAMPARE IL VINCITORE

let winnerMessagge;

if(randomNumberUser > randomNumberComputer) {
    winnerMessagge = "L'utente ha vinto";
    console.log(winnerMessagge);
} else if(randomNumberUser < randomNumberComputer) {
    winnerMessagge = "Il computer ha vinto";
    console.log(winnerMessagge);
} else {
    winnerMessagge = "Pari"
    console.log(winnerMessagge);

}


// EMAIL

/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"  */

// Chiedi all’utente la sua email,
const userMail = prompt('Inserisci email');
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.