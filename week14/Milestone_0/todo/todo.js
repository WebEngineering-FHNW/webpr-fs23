
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
        openTasks.textContent = Number(openTasks.textContent) + (checkboxElement.checked ? -1 : 1);
    };

    todoContainer.appendChild(inputElement);
    todoContainer.appendChild(checkboxElement);

    numberOfTasks.textContent = Number(numberOfTasks.textContent) + 1;
    openTasks.textContent     = Number(openTasks.textContent) + 1;

};
