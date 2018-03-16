var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos:', this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todo.splice(position, 1);
        this.displayTodos;
    },
    toggleComplete: function(postion) {
        var todo = this.todos[postion];
        todo.completed = !todo.completed;
        this.displayTodos()
    }
  };
