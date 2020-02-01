var todoList = {

  // Initialize array of todo objects
  todos: [],

  // It should have a function to display todos
  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log("List is empty");
    } else {
      console.log("My todo's:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true)
          console.log("( X ) " + this.todos[i].todoText);
        else
          console.log("(   ) " + this.todos[i].todoText);
      }
    }
  },

  // It should have a funciton to add todos
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },

  // It should have a function to change todos
  changeTodo: function (position, newText) {
    var todo = this.todos[position];
    todo.todoText = newText;
    this.displayTodos();
  },

  // It should have a function to delete todos
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  // It should have a function to toggle if a todo has been completed or not
  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  // It should have a function to toggle everything true or everything false
  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Count current completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true)
        completedTodos++;
    }

    // If all todo's are true, make them all false
    if (completedTodos === totalTodos) {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else { // Make them all true
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  },

};


var handlers = {
  displayTodos: function () {
    todoList.displayTodos();
  },

  toggleAll: function () {
    todoList.toggleAll();
  },

  addTodo: function () {
    // targets text element and runs addTodo using value of element
    var addTodoTextInput = document.getElementById("addTodoInput");
    todoList.addTodo(addTodoTextInput.value);
    // reset text field
    addTodoTextInput.value = '';
  },

  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");

    // changeTodo requires a position and text as inputs
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);

    // reset fields
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },

  deleteTodo: function () {
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");

    // deleteTodo requires a position as an input
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    // reset field
    deleteTodoPositionInput.value = '';
  },

  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");

    // toggleComplete requires a position as an input
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    // reset field
    toggleCompletedPositionInput.value = '';
  },
};