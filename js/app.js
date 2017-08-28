

var todos = ['Item 1', 'Item 2', 'Item 3'];

function displayTodo() {
    console.log('My todos:', todos);
}

function addTodo(todo) {
    todos.push(todo);
    displayTodo();
}

function editTodo(position, item) {
    todos[position] = item;
    displayTodo();
}

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodo();
}