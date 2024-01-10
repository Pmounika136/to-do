function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.appendChild(document.createTextNode(taskInput.value));
        li.appendChild(span);

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            span.classList.toggle("completed", checkbox.checked);
        });
        li.appendChild(checkbox);

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.addEventListener("click", function () {
            li.remove();
        });
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
    }
}
