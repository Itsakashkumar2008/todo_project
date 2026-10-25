var tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
function addTask(event) {
    event.preventDefault();
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    if (task == "") {
        document.getElementById("message").textContent =
            "Please enter a task.";
        return;
    }
    document.getElementById("message").textContent = "";
    tasks.push({
        text: task,
        done: false
    });
    saveTasks();
    input.value = "";
    showTasks();
}
function saveTasks() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
}
function showTasks() {
    var list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach(function(task, index) {
        var li = document.createElement("li");
        var text = document.createElement("span");
        text.textContent = task.text;
        text.className = "task";
        if (task.done) {
            text.className = "task done";
        }
        var doneButton = document.createElement("button");
        doneButton.textContent = task.done ? "Undo" : "Done";
        doneButton.type = "button";
        doneButton.onclick = function() {
            tasks[index].done = !tasks[index].done;
            saveTasks();
            showTasks();
        };
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";
        deleteButton.type = "button";
        deleteButton.onclick = function() {
            tasks.splice(index, 1);
            saveTasks();
            showTasks();
        };
        li.appendChild(text);
        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
    document.getElementById("count").textContent =
        "Total tasks: " + tasks.length;
    if (tasks.length == 0) {
        document.getElementById("empty").style.display = "block";
    } else {
        document.getElementById("empty").style.display = "none";
    }
}
showTasks();
