// Secondo snack
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var numeri;
var numeriDispari = [];

for (var i = 0; i < 6; i++) {
  numeri = parseInt(prompt('Inserisci un numero'));
  if (numeri%2 != 0) {
    numeriDispari.push(numeri);
  } else {
    console.log('Numero pari');
  }
}

console.log(numeriDispari);

// If da fare dentro il for se lo voglio per tutti i numeri
