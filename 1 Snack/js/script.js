
// Primo snack
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

// // Esercizio con for
//
// var somma = 0;
// var numero;
// for (var i = 0; i < 5; i++){
//   numero = parseInt(prompt('Inserisci un numero'));
//   somma += numero;
// }
//
// console.log(somma);
//
// ////////////

// Esercizio con while

var somma = 0;
var numero;
var i = 0

while (i < 5) {
  i++;
  numero = parseInt(prompt('Inserisci un numero'));
  somma += numero;
}

console.log(somma);

/////////////////


//La forma estesa di somma+= numero; è somma = somma + numero;
