const tasks = [];

function showTask() {
    const list = document.querySelector('.list');
    list.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        const listItem = document.createElement('li');
        listItem.innerText = task;
        listItem.classList.add('myLi')

        const  btnDelete = document.createElement('button');
        btnDelete.innerText = 'Delete';
        btnDelete.setAttribute('data-index', i);
        btnDelete.addEventListener('click', deleteTask);
        btnDelete.classList.add('myClass');
        

        listItem.appendChild(btnDelete);
        list.appendChild(listItem);
    };
};

function addTask() {
    const input = document.querySelector('.input');
    let newTask = input.value;

    if(newTask !== '') {
        tasks.push(newTask);
        showTask()
        input.value = '';
    };
};

function deleteTask() {
    let index = parseInt(this.querySelector('.data-index'));
    tasks.splice(index, 1);
    showTask();
};

const addButton = document.querySelector('.btn');
addButton.addEventListener('click', addTask);

window.addEventListener('load', showTask)