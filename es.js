var numCasuale_lista=[]; //creato lista vuota
var tentativo = prompt('inserisci numero') //utente inserisce

for (var i = 0; i < 16; i++) {
  numCasuale = Math.floor((Math.random()*100)+1);
  numCasuale_lista.push(numCasuale)
}
  console.log(tentativo);
  console.log(numCasuale_lista);

for (var i = 0; i < 100; i++) {
  tentativo = prompt('inserisci numero')
  tentativo = parseInt(tentativo)
  if (numCasuale_lista.includes(tentativo)) {
    alert('hai perso')

  }

}
