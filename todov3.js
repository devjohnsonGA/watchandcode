var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos:', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todo.splice(position, 1);
        this.displayTodos;
    }
  };

//   function displayTodos() {
//       console.log('My Todos:', todos);
//   }

// function changeTodo(position, newValue) {
//     todo[position] = newValue;
//     displayTodos();
// }