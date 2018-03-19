var numCasuale_lista=[]; //creato lista vuota
var tentativo = prompt('inserisci numero') //utente inserisce
var tentativi_riusciti=[]

for (var i = 0; i < 16; i++) {//ciclo for che si ripete 16 volte e crea numeri casuali da 1 a 100
  numCasuale = Math.floor((Math.random()*100)+1);
  numCasuale_lista.push(numCasuale)//inserisco il numero casuale nella lista
}
  console.log(tentativo);
  console.log(numCasuale_lista);


contatore=0
while ((tentativo!=numCasuale_lista)&&(contatore<100)) {
  tentativo = prompt('inserisci numero')
  tentativo = parseInt(tentativo)
  tentativi_riusciti.push(tentativo)
  contatore++
  if (numCasuale_lista.includes(tentativo)) {
    alert('hai perso, hai totalizzato ' + tentativi_riusciti.length + ' punti')
    break;
  }
}
