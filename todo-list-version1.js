var todoList = {

  todos: [],

  // It should have a function to display todos
  displayTodos: function() {
    console.log("My todo's: " + this.todos);
  },

  // It should have a funciton to add todos
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
  // It should have a function to change todos
  changeTodo: function(position, newText) {
    var todo = this.todos[position];
    todo.todoText = newText;
    this.displayTodos();
  },

  // It should have a function to delete todos
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  // It should have a function to toggle if todo has been completed or not
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
}