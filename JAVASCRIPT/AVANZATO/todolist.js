/*label =
completed: */


const todoList = [
    {label: "Learn Css", completed:true},
]

const input = document.querySelector('input.todo')
const button = document.querySelector('button')
button.addEventListener('click', function(){
    todoList.push({label:input.ariaValueMax,completed:false})
    renderList(todoList);
})

const ulList = document.querySelector('.todolist')

// function renderList(list){
//     ulList.innerHTML='';
//     for (let i = 0; i<list.length; i++){
//         const current = list[i]
//         const li = document.createElement('li')
//         li.innerHTML = current.label
//         li.addEventListener('click', function(event){
//             console.log("Event", event, this)
//         })
//         li.classList.add(current.completed ? 'stroke':null)
//         ulList.appendChild(li)
//     }
//     list[idx].completed = !list[idx]
// }

function renderList(list){
    ulList.innerHTML='';
    // scriviamo la stessa cosa in maniera funzionale 
    list.forEach(function(current,i,arr){
        const li = document.createElement('li')
        li.innerHTML = current.label
        li.addEventListener('click', function(event){
            console.log("Event", event, this)
        })
        li.classList.add(current.completed ? 'stroke':null)
        ulList.appendChild(li)

    });
}

let unCompleted = []
for(let i = 0; i<todoList.length; i++){
    if(!todoList[i].completed){
        unCompleted.push(todoList[i])
    }
}

// filter, ha il return obbligatorio
const notCompleted = todoList.filter(function (current){
    return !current.completed
})

var allCompleted = todoList.every(function(current){
    return !current.completed
})


console.log("Not completed", notCompleted, )

renderList(todoList)

//array che contiene degli oggetti 
const carrello = [
    {name:'Libro', price:12, discount:10}
]
// metodo map permette di creare una versione modificata di un array
// const mappedArray = todoList.map(function(current){
//     return ({
//         label:current.label,
//         completed:current.completed,
//         dueDate: new Date()
//     })
// })

const mappedArray = carrello.map(function(current){
    return({
        name: current.name,
        price: current.price,
        //discount:current.discount,
        netPrice: current.price*((100-current.discount)/100)
    }) // parentesi tonde perchè ritorno oggetto
})
const singleNotCompleted = todoList.find

// reduce può essere usato come alternativa al map
const mapp = carrello.reduce(function(acc, curr){
    return{
        name:curr.name.acc

    }
})