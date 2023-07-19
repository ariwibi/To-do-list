const tasks = [];

function displayTasks() {
    const listElement = document.querySelector('.ul-list');
    listElement.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let listItem = document.createElement('li');
        listItem.innerText = task;

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Hapus';
        deleteButton.setAttribute('data-index', i);
        deleteButton.addEventListener('click', deleteTask);

        listItem.appendChild(deleteButton);
        listElement.appendChild(listItem);
    }
}

function addTask() {
    const inputElement = document.querySelector('.input');
    let newTask = inputElement.value;

    if(newTask !== '') {
        tasks.push(newTask);
        displayTasks();
        inputElement.value = '';
    }
}

function deleteTask() {
    let index = parseInt(this.getAttribute('data-index'));
    tasks.splice(index, 1);
    displayTasks();
}

const addButton = document.querySelector('.btn');
addButton.addEventListener('click', addTask);

window.addEventListener('load', displayTasks)

