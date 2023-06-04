
let todoContainer = null;
let numberOfTasks = null;
let openTasks     = null;

const startTodo = (newTodoContainer, newNumberOfTasks, newOpenTasks) => {
    todoContainer = newTodoContainer;
    numberOfTasks = newNumberOfTasks;
    openTasks     = newOpenTasks;
};

const addTodo = () => {

    const inputElement = document.createElement('INPUT');
    inputElement.setAttribute("TYPE","TEXT");
    inputElement.setAttribute("SIZE","36");

    const checkboxElement = document.createElement('INPUT');
    checkboxElement.setAttribute("TYPE", "CHECKBOX");

    checkboxElement.onclick = _ => {
        openTasks.innerText = Number(openTasks.innerText) + (checkboxElement.checked ? -1 : 1);
    };

    const deleteButton = document.createElement('INPUT',);
    deleteButton.setAttribute("TYPE", "SUBMIT");
    deleteButton.setAttribute("VALUE", "-");

    deleteButton.onclick = _ => {
        numberOfTasks.innerText = Number(numberOfTasks.innerText) - 1;
        if (! checkboxElement.checked){
            openTasks.innerText     = Number(openTasks.innerText) - 1;
        }
        todoContainer.removeChild(inputElement);
        todoContainer.removeChild(deleteButton);
        todoContainer.removeChild(checkboxElement);
    };

    todoContainer.appendChild(deleteButton);
    todoContainer.appendChild(inputElement);
    todoContainer.appendChild(checkboxElement);

    numberOfTasks.innerText = Number(numberOfTasks.innerText) + 1;
    openTasks.innerText     = Number(openTasks.innerText) + 1;
};
