document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("Add").onclick = function () {
    console.log("hello");
    document.getElementById("tasks").innerHTML += `
            <div class="task">
                <ul id="taskname">
                <li>
                ${document.getElementById("item").value}
                </li>
                <button class="delete" id="del">
                delete
                </button>
                </ul>
            </div>
        `;
    var tasks = document.getElementById("del");
    console.log(tasks);
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  };
});
