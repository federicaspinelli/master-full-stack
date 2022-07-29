// scope locale e scope globale
var pippo = "Pippo" // definisco la var a livello globale

// le {} definiscono un blocco, possiamo usarle a prescindere dai blocchi if, switch, for, do while, funzioni, oggetti

var macchina = { 
    marca: 'Fiat',
    modello: 'panda'
}

// tali parentesi servono quindi a definire lo scope, ovvero delimitano il valore delle azioni da fare
// quando definiamo una variabile, questa è definita rispetto al suo contesto
// la variabile può avere due contesti:
// 1 Globale
// 2 Locale

function stampaNome(){
    var pippo = "pluto" // se levo questo stampa pippo
    console.log("Il nome è", pippo) // qui pippo vale pluto, perchè è nel blocco
}
stampaNome()

// serve per la gestione dei flussi 
// scrivere qui vari esempi di undefined / errore / pippo / pluto

// Nuovi metodi di dichiarazione variabile let e const
// nelle nuove versioni di JS abbiamo queste due nuove modalità di dichiarazioni

// const definisce una variabile di tipo costante
const nome = "Federica"
// se io dico 
nome ="Gianni"
// mi ritorna errore, dicendo che è impossibile assegnare un nuovo valore alla costante. 
// Siamo sicuri che non venga modificato mai il suo valore
const PI = 3.14 
const macchina = {
    marca: "Fiat"
}
macchina.marca="Audi" // cambia il valore della proprietà
// per cambiare il valore devo assegnare direttamente alle proprietà all'interno della costante
const arr = [1,2,3]
arr.push(6)
const somma = function(a,b){
    return a+b
}
var dodici = somma (6,6)

// let permette la modifica del valore
let pippo = "Pippo"
function stampaNome (){
    pippo= "Pluto"
    console.log('Il nome è ', pippo)
}
stampaNome() // ritorna Pluto


// fino ad ora abbiamo operato con una programmazione di tipo procedurale
// da ora in poi passeremo a una modalità di programmazione più funzionale