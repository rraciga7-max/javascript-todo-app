let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();
    displayTasks();

    input.value = "";
}

function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        let li = document.createElement("li");

        if(task.completed){
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span onclick="toggleTask(${index})">
                ${task.text}
            </span>

            <button class="delete-btn"
            onclick="deleteTask(${index})">
            Delete
            </button>
        `;

        taskList.appendChild(li);
    });
}

function toggleTask(index){
    tasks[index].completed =
    !tasks[index].completed;

    saveTasks();
    displayTasks();
}

function deleteTask(index){
    tasks.splice(index,1);

    saveTasks();
    displayTasks();
}

function saveTasks(){
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}