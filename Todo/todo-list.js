const todos = [{title:'Hello', dueDate:'7/16/2024'},{title:'Hi', dueDate:'7/16/2024'}];        
renderTodos();


function addTodo(){
    let titleInput = document.querySelector('.todo-title');
    let title = titleInput.value;
    let dueDateInput = document.querySelector('.due-date');
    let dueDate = dueDateInput.value;
    todos.push({title, dueDate});
    titleInput.value = '';
    dueDateInput.value = '';
    renderTodos();                 
}


function renderTodos(){
    let todosList = '';
    for(let i=0; i<todos.length; i++){
        const {title,dueDate} = todos[i];
        const html = `
            <div class="todo-container">
                <div>${title}</div>
                <div>${dueDate}</div>
                <button onclick="
                    todos.splice(${i},1);
                    renderTodos();
                " class="delete-btn">Delete</button>
            </div>
        `;
        todosList += html;
    }
    document.querySelector('.todos-container').innerHTML = todosList;
}