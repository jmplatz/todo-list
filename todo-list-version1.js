var todoList = {

  // Initialize array of todo objects
  todos: [],

  // It should have a funciton to add todos
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },

  // It should have a function to change todos
  changeTodo: function (position, newText) {
    var todo = this.todos[position];
    todo.todoText = newText;
  },

  // It should have a function to delete todos
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  },

  // It should have a function to toggle if a todo has been completed or not
  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
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
  },

};


var handlers = {
  toggleAll: function () {
    todoList.toggleAll();

    view.displayTodos();
  },

  addTodo: function () {
    // targets text element and runs addTodo using value of element
    var addTodoTextInput = document.getElementById("addTodoInput");
    todoList.addTodo(addTodoTextInput.value);
    // reset text field
    addTodoTextInput.value = '';

    view.displayTodos();
  },

  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");

    // changeTodo requires a position and text as inputs
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);

    // reset fields
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';

    view.displayTodos();
  },

  deleteTodo: function () {
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");

    // deleteTodo requires a position as an input
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    // reset field
    deleteTodoPositionInput.value = '';

    view.displayTodos();
  },

  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");

    // toggleComplete requires a position as an input
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    // reset field
    toggleCompletedPositionInput.value = '';

    view.displayTodos();
  },

};

var view = {
  displayTodos: function () {
    var todosUl = document.getElementById("todosUl");
    // clear content before entering loop
    todosUl.innerHTML = '';

    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      var todo = todoList.todos[i];
      var textWithCompletion = '';

      if (todoList.todos[i].completed === true) {
        textWithCompletion = "(  x  ) " + todo.todoText;
      } else {
        textWithCompletion = "(     ) " + todo.todoText;
      }

      todoLi.textContent = textWithCompletion;
      todosUl.appendChild(todoLi);
    }
  },

};