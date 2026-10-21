let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

function renderTasks() {
  let ul = document.getElementById('taskList');
  ul.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement('li');
    li.textContent = tasks[i] + " ";
    let delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    delBtn.onclick = function() {
      deleteTask(i);
    };
    li.appendChild(delBtn);
    ul.appendChild(li);
  }
}

function addTask() {
  let input = document.getElementById('taskInput');
  let taskText = input.value.trim();
  if (taskText === "") return;
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  input.value = "";
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
