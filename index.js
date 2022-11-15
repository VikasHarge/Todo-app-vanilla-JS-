let todos = [];

const todosContainer = document.getElementById('todo_container')

let counter = 0;
document.getElementById('addButton').addEventListener('click', function(e){
    const title = document.getElementById('todo_text').value;
    if(title==="") return;
    const todo = {
        id: counter + 1,
        title: title,
        completed: false
    }
    todos.push(todo)
    counter ++;
    
    //Big Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');

    //first small of text
    const TextDiv = document.createElement('div');
    const taskNum = document.createElement('h5')

    taskNum.innerText = 'ToDO #' + (counter)
    TextDiv.appendChild(taskNum)
    const todoTitle = document.createElement('h3')
    taskNum.classList.add('srNo');
    todoTitle.classList.add('todotext');
    todoTitle.innerText = title;
    TextDiv.appendChild(todoTitle)

    //Set of buttons
    //Action Div
    const actionDiv = document.createElement('div')
    actionDiv.classList.add('actionDiv')

    //task Done button
    const doneTask = document.createElement('button')
    doneTask.innerText = 'Mark as done'
    doneTask.classList.add('doneTask')
    actionDiv.appendChild(doneTask)

    //event listner
    doneTask.addEventListener('click', function(e){
        doneTask.innerText = 'completed'
        doneTask.style.backgroundColor= 'green'
        doneTask.disabled = true;
    })

    //Delete Button
    const deleteTask = document.createElement('button')
    deleteTask.innerText = 'Delete'
    deleteTask.classList.add('deleteTask')
    actionDiv.appendChild(deleteTask)

    //event liseners
    deleteTask.addEventListener('click', function(e){
        todosContainer.removeChild(todoDiv)
        const title = todoTitle.innerText;
        todos = todos.filter(todo => todo.filter !== title)
    })

    
    todoDiv.appendChild(TextDiv)
    todoDiv.appendChild(actionDiv)

    

    todosContainer.appendChild(todoDiv);
    document.getElementById('todo_text').value = "";

})