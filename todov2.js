var todos = ['item 1', 'item 2', 'item 3']

function displaysTodos() {
    console.log('My todos:', todos)
}

function addTodo(todo){
    todos.push(todo)
    displaysTodos();
}

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displaysTodos();
}

function deleteTodo(position) {
    todo.splice(position, 1);
    displaysTodos();
}