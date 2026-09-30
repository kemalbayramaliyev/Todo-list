const writeInput = document.querySelector('.write-input');

const addButton = document.querySelector('.add-button');

const allTasks = document.querySelector('.all-tasks');

const delButton = document.querySelector('.delete-button');

let tasks = [];

addButton.addEventListener('click', () => {
    if (writeInput.value !== ''){
        tasks.push(writeInput.value);
        writeInput.value = '';
        createTask();
    };
});

function createTask() {
    allTasks.innerHTML = '';
    tasks.forEach((name, index) => {
        allTasks.innerHTML += `<div class="task-container">
            <input type="checkbox" class="check-input"></input>
            <p class="task-name">${name}</p>
            <button class="edit-button">Edit</button>
            <button class="delete-button" data-index="${index}">Del</button>
        </div>`
    });
}

allTasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')){
        const index = event.target.dataset.index;

        tasks.splice(index, 1);

        createTask();
    }
})
