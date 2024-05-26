document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });
            listItem.textContent = taskText;
            listItem.appendChild(deleteButton);
            listItem.addEventListener('click', () => {
                listItem.classList.toggle('done');
            });
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});




//DOMContentLoaded