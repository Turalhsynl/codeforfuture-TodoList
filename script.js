document.getElementById("add_button").addEventListener("click", addTodo);

function addTodo(){
    const todoInput = document.getElementById("todo_input");
    const todoText = todoInput.value.trim();

    if(todoText){
        const todoList = document.getElementById("todo_list");
        const todoItem = document.createElement("li");
        todoItem.className = "todo_item";
        todoItem.innerHTML = `${todoText} <button onclick="removeTodo(this)">Delete</button>`;
        todoList.appendChild(todoItem);
        todoInput.value = "";
    }
}

function removeTodo(button){
    button.parentElement.remove();
}