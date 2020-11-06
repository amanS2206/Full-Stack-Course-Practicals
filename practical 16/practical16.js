const todoInput = document.querySelector(".to-do-form");
const todoButton = document.querySelector(".to-do-btn");
const todoList = document.querySelector(".to-do-list");

todoButton.onclick = create;
todoList.onclick = checkdelete;

function create(e)  {
    
    e.preventDefault();
    if(todoInput.value === ""){
        alert("Please Enter the Value")
        return;
    }

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newList = document.createElement("li");
    newList.classList.add("todo-item");
    newList.innerHTML = todoInput.value;
    newDiv.appendChild(newList);

    

    var checkbtn = document.createElement("button");
    checkbtn.classList.add("check-btn");
    checkbtn.innerHTML = '<i class="fa fa-check"></i>';
    newDiv.appendChild(checkbtn);

    var deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML = '<i class="fa fa-trash"></i>'
    newDiv.appendChild(deletebtn);
    
    todoList.appendChild(newDiv);

    todoInput.value = "";
}

function checkdelete(e){
    var item  = e.target;
    if(item.classList[0] === "check-btn"){
        var p = item.parentNode;
        p.classList.toggle("completed");
        }

    if(item.classList[0] === "delete-btn"){
        var p = item.parentNode;
        p.remove();

    }

}
