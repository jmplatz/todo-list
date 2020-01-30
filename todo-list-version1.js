var todoList = {

  todos: [],

  // It should have a function to display todos
  displayTodos: function() {
    console.log("My todo's: " + this.todos);
  },

  // It should have a funciton to add todos
  addTodo: function(todo) {
    this.todos.push(todo);
  },
  // It should have a function to change todos
  changeTodo: function(position, change) {
    this.todos[position] = change;
  },

  // It should have a function to delete todos
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
}