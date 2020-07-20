var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)


    var delBtn = document.createElement("I")
    
    var delText = document.createTextNode("")

    delBtn.appendChild(delText)

    delBtn.setAttribute("class","glyphicon glyphicon-trash")
    
    delBtn.setAttribute("onclick","deleteItem(this)")

var editBtn = document.createElement("i");
var editText = document.createTextNode("")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick","editItem(this)")
editBtn.setAttribute("class","glyphicon glyphicon-pencil")

li.appendChild(delBtn)
li.appendChild(editBtn)

    li.appendChild(delBtn)
    list.appendChild(li)
    todo_item.value = ""

}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var value = prompt("Enter updated value" , e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = value;
}

function todoDelete(){
    list.innerHTML = ""
}


