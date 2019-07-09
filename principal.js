onLoad();

function onLoad() {
    let games = [];

    let SOT = {
        name: 'Sea Of Thieves',
        PEGI: 16,
        genre: 'MMORPG'
    };

    let League = {
        name: 'League of Legends',
        PEGI: 10,
        genre: 'MOBA'
    };

    let DMC = {
        name: 'Devil May Cry',
        PEGI: 18,
        genre: 'Hack n Slash'
    };

    games.push(SOT);
    games.push(League);
    games.push(DMC);

    games.sort(ordenarPorPEGI);

    imprimirArray('spanOrderedPorPEGI', games);
}

function ordenarPorPEGI(a, b) {
    return a.PEGI - b.PEGI;
}

function imprimirArray(id, array) {
    let span = document.getElementById(id);
    span.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        span.innerHTML += array[i].name + ' (PEGI: ' + array[i].PEGI + ', genero: ' + array[i].genre + ')<br>';
    }
}


var listElement = document.querySelector("#app ul")
var inputElement = document.querySelector("#app input")
var buttonElement = document.querySelector("#app button")

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];


function renderTodos() {
    listElement.innerHTML = "";
    for (todo of todos) {
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement("a");

        linkElement.setAttribute("href", "#");

        var pos = todos.indexOf(todo);

        linkElement.setAttribute("onclick", "DeletarTodo(" + pos + ")")

        var linkText = document.createTextNode(" Excluir");

        linkElement.appendChild(linkText);


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function DeletarTodo(pos) {
    todos.splice(pos, 1)
    renderTodos();
    saveToStorage();
}

function saveToStorage() 
{ 
    localStorage.setItem("list_todos", JSON.stringify(todos)); 
}
