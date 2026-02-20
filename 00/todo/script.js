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
                <div class="task-content">
                    <h3>${task.name}</h3>
                    <p>Completed:${task.completed}</p>
                </div>
                <div class="remove">
                    <button class="button" id="button${task.name}" onclick="delete(this)">>❌</button>
                </div>
            </div>
        `;   
    })
    container.innerHTML = htmlContent;
    console.log(tasks);
}

function deleteTask(id) {

}