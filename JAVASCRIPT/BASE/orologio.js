// estraggo elemento e lo assegno a var orario
var orario = document.querySelector('.orario')
//voglio visualizzare la data e orario attuale
//new Date restituisce tutte le informazioni sulla data di oggi
// var oggi = new Date()
//metto nel DOM valore della data di oggi
// orario.innerHTML = oggi

// setTimeout funzione che ci consente di eseguire il codice (es tra 20 secondi esegui questa cosa e fine, non lo rieseguire)
// setTimeout(function(){
//     orario.innerHTML='FINITO'
// },5000) // per JS esiste solo concetto di millisecondi

// esempio di utilizzo: sarai renderizzato a questa pagina tra 5 secondi

//setInterval ogni tot secondi indicati esegui questo codice
// var interval = setInterval(function(){
//     console.log("ciao come stai", oggi)
// },1000) 

function updateClock(){
    //new Date restituisce tutte le informazioni sulla data di oggi
    var oggi = new Date()
    //metto nel DOM valore della data di oggi
    orario.innerHTML = oggi
    var giorno = oggi.getDate()
    var mese = oggi.getMonth()
    var anno = oggi.getFullYear()
    var ore = oggi.getHours()
    var minuti = oggi.getMinutes()<10 ? "0"+oggi.getMinutes() :oggi.getMinutes()
    var secondi = oggi.getSeconds()<10 ? "0"+oggi.getSeconds() :oggi.getSeconds()
    orario.innerHTML = "<h1>"+ore+':'+minuti+":"+secondi+"</h1>"
}

var interval = setInterval(updateClock, 1000)
var acceso = true

window.addEventListener("click",function(){
    if(accesso){
        this.clearInterval(interval)
        acceso=false
    } else {
        interval = this.setInterval(updateClock, 1000)
        acceso=true
    }
})
