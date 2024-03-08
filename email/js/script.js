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
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */



//Creare lista emails
const emailList = [
    "alice@example.com",
    "bob@example.com",
    "charlie@example.com",
    "david@example.com",
    "eve@example.com",
    "frank@example.com",
    "grace@example.com",
    "henry@example.com",
    "isabel@example.com",
    "jack@example.com"
  ];
  
//Chiedi all’utente la sua email,
const userEmail = prompt("Inserisci la tua email");
//controlla che la mail dell'utente sia nella lista di chi può accedere,

let emailFound = false;

for(let i = 0; i < emailList.length; i++) {
    const thisEmail = emailList[i];
    console.log(thisEmail);

    if(thisEmail === userEmail) {
        emailFound = true;
        console.log(emailFound);
    }
}
// Se e' presente stampami vero
//stampa un messaggio appropriato sull’esito del controllo.
if(emailFound === true) {
    alert('Puoi accedere');
}else {
    alert("La tua email non e' corretta");
}

