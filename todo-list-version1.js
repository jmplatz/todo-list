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

    this.todos.forEach(function (todo) {
      if (todo.completed === true)
        completedTodos++;
    });

    // If all todo's are true, make them all false
    if (completedTodos === totalTodos) {
      this.todos.forEach(function (todo) {
        todo.completed = false;
      });
    } else { // Make them all true
      this.todos.forEach(function (todo) {
        todo.completed = true;
      });
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

    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';

    view.displayTodos();
  },

  deleteTodo: function (position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },

  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");

    // toggleComplete requires a position as an input
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';

    view.displayTodos();
  },

};

var view = {
  displayTodos: function () {
    var todosUl = document.getElementById("todosUl");
    todosUl.innerHTML = '';

    todoList.todos.forEach(function (todo, position) {
      var todoLi = document.createElement("li");
      var textWithCompletion = '';

      if (todo.completed === true) {
        textWithCompletion = "(  x  ) " + todo.todoText;
      } else {
        textWithCompletion = "(     ) " + todo.todoText;
      }

      // gives each li an id based on position
      todoLi.id = position;
      todoLi.textContent = textWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);

    }, this);
  },

  createDeleteButton: function () {
    var deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";

    return deleteButton;
  },

  setUpEventListeners: function () {
    var todosUl = document.getElementById("todosUl");

    todosUl.addEventListener("click", function (event) {
      var elementClicked = event.target;

      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  },
};

view.setUpEventListeners();