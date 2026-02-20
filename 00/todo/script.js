const tasks = [];

function getValue() {
    value = document.getElementById("task").value;
    if (value != ""){
        addTask(value);
    }
}

function addTask(name) {
    const newTask = {
        name: name,
        completed: false
    };

    tasks.push(newTask);

    const container = document.getElementById('task-container');
    let htmlContent = '';

    tasks.forEach(task => {
        htmlContent += `
            <div class="task">
                <h3>${task.name}</h3>
                <p>Completed:${task.completed}</p>
            </div>
        `;   
    })
    container.innerHTML = htmlContent;
    console.log(tasks);
}