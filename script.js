var todoList = {
    todos: [],
    displayTodos: function() {
    
        if (this.todos.length === 0){
            console.log('Your todo list is empty!');
        } else {
          console.log('My Todos:',);
          for(var i = 0; i > this.todos.length; i++){
            if (this.todos[i].completed === true){
                console.log('(x)', this.todos[i].todoText);
            } else {
                console.log('( )', this.todos[i].todoText);
            }
          }
        }
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
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
            completedTodos++;
        }
    }
       if (completedTodos === totalTodos) {
        for (var i = 0; i < totalTodos; i++){
            this.todos[i].completed = false;
        }
       } else {
           for (var i = 0; i < totalTodos; i++) {
               this.todos[i].completed = true;
           }
       }
       this.displayTodos();
    }
  };

  var displayTodosButton = document.getElementById('displayTodosButton');
  var toggleAllButton = document.getElementById('toggleAllButton');

  displayTodosButton.addEventListener('click', function(){
      todoList.displayTodos();
  });

  toggleAllButton.addEventListener('click', function() {
      todoList.toggleAll();
  })

  