// JAVASCRIPT
// OPERATORE TERNARIO 
var messaggio 
if (anni_di_differenza > 18){

} else {

}

var messaggio = anni_di_differenza > 18 ? "Goditi l'esperienza" : "Spiacente, il sito non fa per te"

//OPERATORI LOGICI 
// && and
anniDifferenza > 18 && nome == "federica"
// || or
anniDifferenza > 18 || nome == "federica"
// ! negazione
// utilizzato per invertire un valore booleano
var pannello = false 

// if (pannello == false){
// posso anche indicare pannello (pannello) vale true 
// posso indicare anche con il not, quindi 

if (!pannello){
    //nascondi pannello
} else {
    //mostra pannello
}

pannello = !pannello 

// un = uguale assegna, due == uguale chiede di verificare, il === uguale indica una forzatura del tipo

// ARRAY 
var seleforPeople = ['Miriam', 'Riccardo', 'Federica', 'Simone']
// se scrivo seleforPeople[0] restituisce Miriam, seleforPeople[4] restituisce undefined
//ARRAY devo conoscere la posizione del dato
var miriam = ['Miriam', 'miriam@test', '123456789']
//OGGETTO 
var federica = {nome: 'Federica', email: 'federica@test', tel:'123456789'}
federica.nome // sarà sempre Federica
miriam[0] // non sono sicuro che sia sempre nome

// ARRAY DI OGGETTI
var seleforPeople = [
    {nome: 'Miriam', email: 'miriam@test', tel:'123456789'},
    {nome: 'Federica', email: 'federica@test', tel:'123456789'}
]

// non necessariamente è omogeneo
var array = ['Miriam', 12, false, 'Milano', [0,12,3]]

// sono monodimensionali
// posso eseguire delle operazioni sugli array

// I linguaggi JS rientrano nella Object Oriented Programming, prigrammazione orientata agli oggetti
// tutto è orientato agli oggetti (variabili particolari che ci permettono di definirel attributi, metodi)
// esempio automobile, tutte le proprietà (attributi) che descrivono la macchina, questa macchina può compiere delle azioni
// definisco oggetti con le {}

var macchina = {
    colore: 'Giallo',
    annoDiProduzione: 2022,
    autoEpoca: false,
    proprierari: ['Gianni', 'Mario'],
    produttore: 'Maserati',
    modello: 'Pippo',
    /*optional: {
        autoradio: true,
        retrocamera: false
    }*/
}
// attributi per definire oggetto
// come estraggo? macchina.proprietàchevoglioleggere

macchina.colore // Giallo
macchina.autoEupoca //false 
macchina.optional.autoradio //true
macchina.optional.retrocamera = true // assegnazione in fase di creazione, override

// per aggiungere proprietà se ho già definito var non serve ri-indicare var
// dot tutto raggiungibile con i punti
macchina.optional.stazioniradio.preferito = 'Radio Deejay'

// formula IS

TODO
// interfaccia con tabella con CSS intestazione nome mail telefono isPresent: true input type checkbox 

// Gli array sono ciclabili o iterabili (IterableObjects), attraverso delle modalità che vedremo si può scorrere l'oggetto, anche detto loop.

// METODI DI LOOP
for (var i=0; i<seleforPeople.length; i++){
    console.log(seleforPeople[i].nome+ ' è presente? ' + seleforPeople[i].isPresent)
}
// prendo la variabile i e gli assegno 0
// itera fino a quando il valore di i resta < della lunghezza dell'array (4)
// incrementa il valore di i per ogni iterazione

//restituisce : Miriam è presente? true, Riccardo è presente? true ... Simone è presente? true

// console.log stampa in console
// il + serve a sommare due stringhe, concatenazione o due numeri, somma
// riconosce il tipo e lo converte in stringa se i tipi zono diversi (prova a sommare true e stringa)

// WHILE
// elimina la parte di dichiarazione della variabile e incremento 
// è un costrutto più semplice

var i = 0;
while (i < seleforPeople.length) {
    console.log(seleforPeople[i].nome)
    i ++ // se non metto il contatore va in loop
}

// JS è stato progettato per essere eseguito nel browser, quindi è necessario eseguire una serie di passaggi necessari all'interno di un contesto 
// Window e Document
// creano il ponte tra JS e HTML
window // livello programmatico: fa riferimento alla nostra finestra, ha diverse proprietà, 
document // livello di struttura

// i file vengono letti top down, anche nel caso di HTML
// DOM DOcument Object Model
// tutti i nodi scritti nell'HTML convertiti in oggetto 
// il nostro script deve interagire con il DOM
// per questo scriviamo delle funzioni, che possono essere riutillizzate tutte le volte che ne ho bisogno

// funzione parametrica è una funzione che accetta dei parametri
function media(a, b, c) {
    var m = (a + b+ c) /3 
    return m
}


function somma (a,b){
    return a+b // il return blocca l'esecuzione della funzione
}

function faiTanteCose (node, azioni) {
    if (nome =='Gaetano'){
        console.log('ciao')
        return
    }
    console.log('xxxxxxx')
}
var risultato = faiTanteCose('Gaetano', 'Ciao') // solo se il valore di nome è != da Gaetano stampa le xxxxx in console, perchè in return interrompe l'esecuzione della funzione
console.log("Risultato", risultato)

// JS supporta il "casting" ovvero la conversione o coercizione del tipo di base (booleano, numerico, stringa) no su array o oggetto multidimensionale
// essendo bassamente tipizzato fa una coercizione del tipo (stringa, numero, anche un array, ma solo monodimensionale)

// 3.1 JavaScript e il DOM
// 3.1.1 Il DOM (Document Object Model) Elementi (tag html), Attributi (attributi dei tag html), nodi testuali
// childnodes e children (ha la node list table > th > td)
// quando ci riferiamo al documento d'ora in poi parleremo di DOM

// Funzioni per l'interazione con il DOM: 
document.getElementById // deriva dalle prime versioni di JS, serve a estrarre un elemento attraverso il suo ID
document.getElementsByTagName("table") // ritorna array di oggetti
document.getElementsByClassName("email") //

var tabella = document.querySelector('#maintable') // # per id
var tabella3 = document.querySelector('table') // elemento
var tabella4 = document.querySelector('.scuro') // . per classe
var tabella5 = document.querySelector('table#maintable tr th:first-child') // funziona come i CSS
var tabelle = document.querySelectorAll('#maintable') // ritorna un array con un solo elemento

console.log("Tabella 2", tabella2)

// oggetto classList: lista di classi, come se fosse un array, se richimatato restituisce DOMtokenList
tabella.classList.add('scuro')
// aggiungere o rinuovere elemento in JS viene definito toggle (pulsante, interruttore): se è presente togli, se è assente metti

// Manipolare gli stili CSS e il contenuto degli elementi con JS e DOM: le proprietà syle e innerHTML
// la proprietà innerHTML ci permette di modificare l'HTML
tabella4.innetHTML = "<strong>Nome completo</strong>"

// Gli eventi in JavaScript 
// onload, onclick, onsubmit, onscroll, onmousemove
// gli eventi in JS scatenano delle funzioni si chiamano tutti con "on" iniziale, all'evento, posso catturare la sua tipologia 
/*var niancat = document.querySelector('img.mouse-cursor')
console.log("Nian cat", niancat)

var body = document.querySelector('body')
// assegna funzione anonima al movimento del mouse
body.onmousemove = function(event) {
    //niancat.style.t
}*/

var pulsante = document.querySelector('button.toggle')

pulsante.onclick = function(event){
    tabella.classList.toggle('scuro')
}

var tbody = tabella.querySelector('tbody')
console.log(tbody)

// voglio scrivere una riga della tabella per ogni persona disponibile 

for (var i =0; i<seleforPeople.length; i++) {
    // qui dentro ho le righe di seleforPeople
    var p = seleforPeople[i] // valore corrente di ogni valore dell'oggetto
    var tr = document.createElement('tr')
    var nome = document.createElement('td')
    nome.innerHTML = p.nome 
    var mail = document.createElement('td')
    mail.innerHTML = p.mail
    var tel = document.createElement('td')
    tel.innerHTML = p.tel
    var isPresent = document.createElement('td')
    isPresent.innerHTML = p.isPresent
}

console.log(tr,nome,mail)

// le variabili sono allocazioni di memoria, quindi le vedo in console con console log, ma non le vedo nel body del html

tr.appendChild(nome)
tr.appendChild(mail)
tr.appendChild(tel)
tr.appendChild(isPresent)


// per commentare shift command 7 
// per aprire barra in alto VS code shift command P