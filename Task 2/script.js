const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault();
   
    const taskTitle = document.getElementById("task-title").value;
    const taskDeadline = document.getElementById("task-deadline").value;
    const taskPriority = document.getElementById("task-priority").value;
    const taskLabel = document.getElementById("task-label").value;

    
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
        <h2>${taskTitle}</h2>
        <p>Deadline: ${taskDeadline}</p>
        <p>Priority: ${taskPriority}</p>
        <p>Label: ${taskLabel}</p>
    `;

    
    taskList.appendChild(taskItem);

    
    document.getElementById("task-form").reset();
}
