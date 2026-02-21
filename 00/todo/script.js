let tasks = [];

function getValue() {
    value = document.getElementById("task").value;
    if (value != ""){
        addTask(value);
    }
}

function addTask(name) {
    const newTask = {
        id: tasks.length + 1,
        name: name,
        completed: false
    };

    tasks.push(newTask);
    loadTask();
}

function loadTask() {
    const container = document.getElementById('task-container');
    let htmlContent = '';

    tasks.forEach(task => {
        htmlContent += `
            <div class="task" id="task-${task.id}">
                <div class="task-content">
                    <p>Id = ${task.id}</p>
                    <h3>${task.name}</h3>
                    <p>Completed:${task.completed}</p>
                </div>
                <div class="remove">
                    <button class="button" id="${task.id}" onclick="deleteTask(this)">❌</button>
                    <button class="button" id="${task.id}" onclick="completeTask(this)">✔️</button>
                </div>
            </div>
        `;   
    })
    container.innerHTML = htmlContent;
    console.log(tasks);
}

function deleteTask(button) {
    const idToRemove = Number(button.id);
    const element = document.getElementById(`task-${idToRemove}`);

    element.classList.add("fade-out");

    setTimeout(() => {
        tasks = tasks.filter(task => task.id !== idToRemove);

        loadTask();
    }, 400); 
}


function completeTask(id) {
    const idToComplete = Number(id.id);
    tasks = tasks.map(task => {
        if (task.id === idToComplete) {
            return {
                id: task.id,
                name: task.name,
                completed: !task.completed };
            } else {
                return task;
} });
    loadTask();
}