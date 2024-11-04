class TodoApp {
    constructor() {
        this.inputField = document.getElementById('todo-input');
        this.addButton = document.getElementById('add-btn');
        this.sortButton = document.getElementById('sort-btn');
        this.todoList = document.getElementById('todo-list');
        this.todoBody = document.querySelector('.todo-body');

        this.isAscending = true;

        this.addButton.addEventListener('click', () => this.handleAddButtonClick());
        this.sortButton.addEventListener('click', () => this.sortTasks());
    }

    handleAddButtonClick() {
        if (this.inputField.style.display === 'none') {
            this.inputField.style.display = 'block';
            this.todoList.style.display = 'none';
            this.inputField.focus();
        } 
        else {
            this.addTask();
        }
    }

    addTask() {
        const taskText = this.inputField.value.trim();

        if (taskText) {
            const listItem = this.createTaskItem(taskText);
            this.todoList.appendChild(listItem);

            this.inputField.value = '';
            this.inputField.style.display = 'none';
            this.todoList.style.display = 'block';
        }
    }

    createTaskItem(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${taskText} <button class="delete-btn"><img src="icons/delete-icon.png" alt="delete icon"></button>`;

        listItem.querySelector('.delete-btn').addEventListener('click', () => this.deleteTask(listItem));

        return listItem;
    }

    deleteTask(listItem) {
        listItem.remove();
    }

    sortTasks() {
        const items = Array.from(this.todoList.getElementsByTagName('li'));

        items.sort((a, b) => {
            const textA = a.textContent.trim().toLowerCase();
            const textB = b.textContent.trim().toLowerCase();
            return this.isAscending ? textA.localeCompare(textB) : textB.localeCompare(textA);
        });

        this.todoList.innerHTML = '';
        items.forEach(item => this.todoList.appendChild(item));

        this.isAscending = !this.isAscending;
        this.updateSortIcon();
    }

    updateSortIcon() {
        const sortIcon = this.isAscending ? 'icons/sort-ascending.png' : 'icons/sort-descending.png';
        this.sortButton.querySelector('img').src = sortIcon;

        this.sortButton.setAttribute('data-sort', this.isAscending ? 'ascending' : 'descending');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new TodoApp();
});
