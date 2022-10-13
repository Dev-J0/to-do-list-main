//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTodo);
//Functions
function addTodo(event){
    event.preventDefault();
    //prevent form from submitting
    //to do div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    //replaced 'hey' with todoInput.value so we can have unique answers
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trashButton');
    todoDiv.appendChild(trashButton);
    //appand to list
    todoList.appendChild(todoDiv);
    //to generate a new to do 
    //clear todo input value
    todoInput.value = '';
}
 
function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trashButton') {
        const todo = item.parentElement;
        todo.remove();
    }
    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completedButton');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completedButton')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completedButton')) {
                    todo;style.display = "flex";
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

// for internal storage
function saveLocalTodos(todo){
    
}