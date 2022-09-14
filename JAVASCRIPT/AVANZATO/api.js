const endpoint = "./power_lemmarioB.json"
// const local = "./power_lemmarioB.json"
const apiList = document.querySelector('ul.apiList')

// Esempio lezione
async function caricaDati (){
    const api = await fetch(endpoint).then(res=>res.json())
    console.log("Visualizza api", api)
    renderList(api.splice(10))
}

// DOCUMENTAZIONE 
// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// Prova caricamento json locale
// async function caricaDati (){
//     const data = await fetch('./power_lemmarioB.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     renderList(data.entries)
// }

// Prova caricamento json locale con fetch
// async function caricaDati (){
//     const api = await fetch("./power_lemmarioB.json").then(res=>res)
//     renderList(api.entries)
// }

// PROVA con .readFile
// const local = require('local');
// local.readFile("./power_lemmarioB.json", 'utf8', (err, data) => {
//     if (err) console.error(err);
//     const lemmi = JSON.parse(data);
//     console.log(lemmi[0].value);
// });

caricaDati()

function renderList(list){
    apiList.innerHTML=''
    list.forEach(item=>{
        const li = document.createElement('li')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')

        h2.innerHTML = item.lemma.forma_standard
        p.innerHTML = item.id

        li.appendChild(h2)
        li.appendChild(p)

        apiList.appendChild(li)
        console.log("Item ",item)
    })
}