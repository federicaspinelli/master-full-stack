const endpoint = "https://api.publicapis.org/entries"
// const local = "./power_lemmarioB.json"
const apiList = document.querySelector('ul.apiList')

async function caricaDati (){
    const api = await fetch(endpoint).then(res=>res.json())
    renderList(api.entries)
}

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

        h2.innerHTML = item.API
        p.innerHTML = item.Description

        li.appendChild(h2)
        li.appendChild(p)

        apiList.appendChild(li)
        console.log("Item ",item)
    })
}