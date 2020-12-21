// Quarto Snack
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

var firstNum = parseFloat(prompt('Inserisci un numero'));
var secondNum = parseFloat(prompt('Inserisci un numero'));

console.log('Il primo numero inserito è: ' + firstNum);
console.log('Il secondo numero inserito è: ' + secondNum);

var message = 'I numeri sono uguali';
var standMex = 'Il numero più alto è: ';

if (firstNum > secondNum) {
    message = standMex + firstNum;
} else if (firstNum < secondNum) {
    message = standMex + secondNum;
}

console.log(message);
