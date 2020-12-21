// Terzo Snack
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitati = ['Mario', 'Giorgio', 'Marco']

var nome = prompt('Inserisci il tuo nome')

var messaggio = false;

for (var i = 0; i < invitati.length; i++){
  if (nome == invitati[i]){
    messaggio = true;
  }
}

if (messaggio == true){
  console.log('Può entrare');
  document.getElementById('permesso').innerHTML = 'Può entrare'
} else {
  console.log('Non può entrare');
  document.getElementById('permesso').innerHTML = 'Non può entrare'
}
