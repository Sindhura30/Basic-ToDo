const form = document.querySelector('#addTaskForm');
const todoList = document.querySelector('#task-list');

 const addListItem = (task) => {
    let list = document.createElement('li');
    list.innerHTML = `<input class="form-check-input me-1" type="checkbox" /><span>${task}</span>
    <button class="badge text-bg-danger rounded-pill" id="delete-btn">
    DELETE
    </button>`
  todoList.appendChild(list);
 }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const addTaskInput = document.querySelector('#new_task');
    const newTask = addTaskInput.value;
    addListItem(newTask);
    addTaskInput.value = '';
  })

  todoList.addEventListener('click', (event)=> {
    if ( event.target.tagName === 'BUTTON') {
        let itemToBeRemoved = event.target.parentElement;
        todoList.removeChild(itemToBeRemoved);
    }
  })
