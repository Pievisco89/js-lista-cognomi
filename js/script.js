/* prompt cognome utente */
var cognome_utente = prompt("Inserisci il tuo cognome: ");

/* array con lista cognome */
var lista_cognomi = [ "Bianchi", "Rossi", "Pasolini", "Verdi", "De Gregori", "Guccini"]

/* inserire cognome utente nell'array con push e stampare lista in ordine alfabetico */
lista_cognomi.push(cognome_utente);
lista_cognomi.sort();
console.log(lista_cognomi);

/* scrivere lista in html */
for(var i = 0; i < lista_cognomi.length; i++){

  var elemento_lista = lista_cognomi[i];

/* creazione elemento precedente e successione elementi */  
  var elemento_precedente = document.getElementById("output").innerHTML;
  document.getElementById('output').innerHTML = elemento_precedente + "<li>" + elemento_lista + "</li>";
  
  /* creo posizione umana cognome utente */
  var a = lista_cognomi.indexOf(cognome_utente) + 1;
  console.log(a);
  document.getElementById('posizione').innerHTML = "Il cognome da te inserito è alla posizione: " + a;
}