// list of tasks added
var tasks = [];
// the number of tasks we are uo to
var numTasks = 0;

// main run function
var addTask = function(event) {
    // Prevent page from reloading when pressing enter
    event.preventDefault();
    // get the value of the input field
    var task = document.getElementById("todo_text").value;
    // add the task to the array
    newObject = {
        "task": task,
        "complete": false,
        "timestamp": Date.now()
    };
    tasks.push(newObject);
    // create the list element
    var li = document.createElement("li");

    // create the text node
    var text = document.createTextNode(task);
    li.appendChild(text);

    // create the checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task_" + numTasks;
    // add the checkbox functionality
    checkbox.addEventListener("click", function() {
        // check if checkbox is checked
        if (this.checked) {
            // if it is, add the strike through
            this.parentNode.style.textDecoration = "line-through";
            // update the array
            tasks[this.id.split("_")[1]].complete = true;
            
        } else {
            // if it is not, remove the strike through
            this.parentNode.style.textDecoration = "none";
            // update the array
            tasks[this.id.split("_")[1]].complete = false;
        }
        updateTaskCount();
    });
    li.appendChild(checkbox);

    numTasks++;    

    // add the list element to top of the list
    document.getElementById("list").insertBefore(li, document.getElementById("list").childNodes[0]);

    // clear the input field and focus it
    document.getElementById("todo_text").value = "";
    document.getElementById("todo_text").focus();
    console.log(tasks);
    updateTaskCount();
};

// update task counter
var updateTaskCount = function() {
    // Variables
    var count = 0;
    var complete = 0;

    // Loop through tasks
    for (var i = 0; i < tasks.length; i++) {
        // If task is complete add to complete count
        if (tasks[i].complete) {
            complete++;
        }
        count++;
    }
    // Update the task count
    document.getElementById("task_count").innerHTML = complete + "/" + count;
};

document.getElementById("addButton").addEventListener("click", addTask, false);
