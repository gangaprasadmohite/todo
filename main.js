var newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#addTask');
var toDoUl = document.querySelector(".todo-list ul");
var completeUl =  document.querySelector(".complete-list ul");

var createNewTask = function(task){
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input"); 
  var label = document.createElement("label"); 
  label.innerText = task;
  checkBox.type = "checkbox";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;    
};

var addTask = function(){
  var listItem = createNewTask(newTask.value);
  toDoUl.appendChild(listItem); 
  newTask.value="";
  bindIncompleteItems(listItem, completeTask);
};

var completeTask = function(){
  var listItem = this.parentNode;
  var deleteBtn = document.createElement("button"); 
  deleteBtn.innerText ="Delete"; 
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  var checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();
  completeUl.appendChild(listItem); 
  bindCompleteItems(listItem, deleteTask);
};

var deleteTask = function(){
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);  
};

var bindIncompleteItems = function(taskItem, checkBoxClick){  
  var checkBox = taskItem.querySelector("input[type=checkbox]");
  checkBox.onchange = checkBoxClick;  
}; 

var bindCompleteItems = function(taskItem, deleteButtonPress){
  var deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteButtonPress;
};

for(var i=0; i < toDoUl.children.length; i++) {
  bindIncompleteItems(toDoUl.children[i], completeTask);
}

for(var i=0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

addTaskBtn.addEventListener("click", addTask);