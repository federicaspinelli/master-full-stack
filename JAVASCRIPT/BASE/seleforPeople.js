// creo array di oggetti con proprietà
var seleforPeople = [
    {nome: 'Miriam', mail: 'miriam@test', tel:'123456789', isPresent:true},
    {nome: 'Federica', mail: 'federica@test', tel:'123456789', isPresent:true},
    {nome: 'Riccardo', mail: 'riccardo@test', tel:'123456789', isPresent:true},
    {nome: 'Simone', mail: 'simone@test', tel:'123456789', isPresent:true}
]

//var tabella  = document.getElementById('maintable')
//tabella.classList.add('scuro')
//console.log("La mia tabella", tabella)

// var intestazioneTabella = document.querySelector('table#maintable th')

// var pulsante = document.querySelector("button.toggle#s")

// pulsante.addEventListener('click', function(event){
//     tabella.classList.toggle('scuro')
// })

// var pulsante2 = document.querySelector("button.toggle#e")

// // Riempirlo con il contenuto
// pulsante2.addEventListener('click', function(event){
//     intestazioneTabella.classList.toggle('fontintestazione')
// })

/*console.log('Elenco persone', seleforPeople)

// funzione che indica presenza o meno (verificaUtente)
function verificaUtente (name) {
    this.name = name;
    document.getElementById(this.name).onclick = function() {
        var checkboxes = document.getElementsByName('present');
        for (var checkbox of checkboxes) {
            checkbox.checked = this.checked;
            console.log(checkbox.nome+ ' è presente? ')
        }
    }
}*/

//titolo.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
// Creare l'elemento <h4>
//var titolo = document.createElement('h4'); 

//tramite variabili recupero gli elementi necessari
var tabella = document.querySelector('#maintable') //seleziono elemento con id maintable
//posso utilizzare quertSelector anche su un elemento (se non c'è elemento ritorna undefined)
var tbody = tabella.querySelector('tbody') //seleziono elemento tbody della tabella

console.log(tbody)

//definiamo la funzione per il rendering della tabella
function renderTable (list){ // passo il parmetro lista
    tbody.innerHTML= "" // innerHTML per l'aggiunta degli elementi nel documento HTML serve a svuotare tabella dai valori già assegnati
    for(var i = 0; i<list.length; i++){
        var p = list[i] // valore corrente, variabile temporale attuale della lista
        var tr = document.createElement('tr') //creo elemento tr, la riga
        var nome = document.createElement('td') // creo le varie variabili
        nome.innerHTML = p.nome // assegnazione. Con = è assegnazione. Equivale a list[i].nome; con innerHTML inserisco i valori correnti associati nella lista
        var mail = document.createElement('td')
        mail.innerHTML = p.mail
        var tel = document.createElement('td')
        tel.innerHTML = p.tel
        var isPresent = document.createElement('td')
        //isPresent.innerText = p.isPresent
        var checkButton = document.createElement('button') // nel td creo un bottone per il check
        checkButton.innerText=p.isPresent
        checkButton.classList.add('circle') //assegna la classe circle
        checkButton.classList.add(p.isPresent ? 'present':'absent') // operatore ternario: se vero assegna la classe presente, altrimenti assegna la classe assente
        
        checkButton.addEventListener('click', function(event){
            var tr = event.target.parentElement.parentElement
            var idx = Array.from(tr.parentElement.children).indexOf(tr)
            list[idx].isPresent = !list[idx].isPresent //indico alla lista che se modifico la riga devo invertite valore booleano della variabile
            // il punto interrogativo inverte il valore booleano della variabile
            renderTable(list)
            console.log('Modifico la riga', tr, idx)
        })

        // aggiungo pulsante button al td
        isPresent.appendChild(checkButton)
        
        // aggiungo elemento td alla tabella
        var edit = document.createElement('td')
        // aggiungo bottone e assegno con innerText la stringa
        var editButton = document.createElement('button')
        editButton.innerText='Delete'
        
        // forma equivalente 
        // editButton.onClick('click', function(event){
        //aggiungo funzione con evento
        editButton.addEventListener('click', function(event){
            //seleziono l'elemento che mi interessa modificare
            var tr = event.target.parentElement.parentElement
            //prendo l'array
            var idx = Array.from(tr.parentElement.children).indexOf(tr)
            //adesso che ho l'array, posso prendere e cancellare elemento dall'array
            list.splice(idx,1) // modifica l'array che ha come indice idx, numero di valori da cancellare
            //splice cambia contenuto array --> MODIFICA
            //slice ritorna una copia shallow copy --> COPIA
            console.log('Cancello la riga', tr,idx)
            //devo aggiornare la tabella richiamando la funzione
            renderTable(list)
        }) 
        
        
        edit.appendChild(editButton)

        tr.appendChild(nome)
        tr.appendChild(mail)
        tr.appendChild(tel)
        tr.appendChild(isPresent)

        tbody.appendChild(tr)

        console.log("Ho creato degli elementi", tr, nome, mail, tel, isPresent)
        
        tr.appendChild(edit)

    }
}

var form = document.querySelector('form.add-data')

form.addEventListener('submit', function(event){
    event.preventDefault(); // indica al form di non comportarsi come sempre, quindi a inviare tutti i dati, ma stoppati
    console.log('Evento della form', event)
    var name = event.target[0].value //estraggo le variabili per ciascun input inserito
    var mail = event.target[1].value
    var tel = event.target[2].value
    var isPresent = event.target[3].value
    // aggiungo variabili con il metodo push all'array
    seleforPeople.push({nome:name, mail:mail, tel:tel, isPresent:isPresent =='false'?false:true})
    renderTable(seleforPeople) //renderizza la tabella
})

renderTable(seleforPeople)