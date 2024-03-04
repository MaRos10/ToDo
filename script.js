// Get reference to HTML elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");

// Function to add a new task
function addTask() {
    if(inputBox.value === '') {
        alert("Please write something to add it")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; 
        li.classList.add("new-task"); // Add class for animation
        listContainer.appendChild(li); 
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7"; // Add a cross icon
        li.appendChild(span);

        // Remove the animation class after a delay
        setTimeout(function() {
            li.classList.remove("new-task");
        }, 300); // Same duration as in CSS animation
    }
    inputBox.value = ''; 
    saveData() 
}


// Event listener for add button
addButton.addEventListener("click", addTask);

// Function to add task on pressing Enter
function addTaskOnEnter(event) {
    if (event.keyCode === 13) {     // 13 = enter-key
        addTask()
    }
}
inputBox.addEventListener("keypress", addTaskOnEnter);


// Event listener for list container to handle task clicks
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {                     
        e.target.classList.toggle("checked"); 
        saveData()
    }
    else if(e.target.tagName === "SPAN") {    // If clicked element is a span
        e.target.parentElement.remove();      // Remove its parent list item
        saveData();
    }
}, false);


// Function to save tasks in browser's local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML) // Second parameter will be saved
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();