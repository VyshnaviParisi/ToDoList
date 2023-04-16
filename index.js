function addToList() {
    var task = document.getElementById('tasks').value
    var tododiv = document.getElementById('myToDo')
    var newtodoitem = document.createElement('div');
    var todoname = document.createElement('li')
    todoname.innerHTML = task;
    var deletebtn = document.createElement('i')
    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')
    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)
    tododiv.appendChild(newtodoitem)
}

var tododiv = document.getElementById('myToDo')
tododiv.addEventListener('click', deleteitem)

function deleteitem(e) {
    const element = e.target
    if (element.classList[0] == 'far') {
        element.parentElement.remove();
    }

}