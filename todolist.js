const writeInput = document.querySelector('.write-input');

const addButton = document.querySelector('.add-button');

const allTasks = document.querySelector('.all-tasks');

const delButton = document.querySelector('.delete-button');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

createTask();

addButton.addEventListener('click', () => {
    if (writeInput.value !== ''){
        tasks.push(
            {text: writeInput.value,
                completed: false}
            );
        writeInput.value = '';
        createTask();
        saveTasks();
    };
});

function createTask() {
    allTasks.innerHTML = '';
    tasks.forEach((task, index) => {
        allTasks.innerHTML += `<div class="task-container">
            <input 
            type="checkbox" 
            class="check-input"
            ${task.completed ? 'checked' : ''} 
          onchange="toggleTask(${index})"
          >
            <p class="task-name ${task.completed ? 'completed' : ''}">${task.text}</p>
            <button class="edit-button">Edit</button>
            <button class="delete-button" data-index="${index}">Del</button>
        </div>`
    });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  createTask();
}

allTasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')){
        const index = event.target.dataset.index;

        tasks.splice(index, 1);

        createTask();
        saveTasks();
    };
});


function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};