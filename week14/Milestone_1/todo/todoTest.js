// requires todo.js
// requires /util/test.js

test("todo-crud", assert => {

    // setup
    todoContainer = document.createElement("div");
    numberOfTasks = document.createElement("span");
    numberOfTasks.textContent = '0';
    openTasks = document.createElement("span");
    openTasks.textContent = '0';

    startTodo(todoContainer, numberOfTasks, openTasks);

    const elementsPerRow = 3;

    assert.equals(todoContainer.children.length, 0*elementsPerRow);
    assert.equals(numberOfTasks.textContent, '0');
    assert.equals(openTasks.textContent, '0');

    addTodo();

    assert.equals(todoContainer.children.length, 1*elementsPerRow);
    assert.equals(numberOfTasks.textContent, '1');
    assert.equals(openTasks.textContent, '1');

    addTodo();

    assert.equals(todoContainer.children.length, 2*elementsPerRow);
    assert.equals(numberOfTasks.textContent, '2');
    assert.equals(openTasks.textContent, '2');

    const firstCheckbox = todoContainer.querySelectorAll("input[type=checkbox]")[0];
    assert.equals(firstCheckbox.checked, false);

    firstCheckbox.click();

    assert.equals(firstCheckbox.checked, true);

    assert.equals(numberOfTasks.textContent, '2');
    assert.equals(openTasks.textContent, '1');

    // add a test for the deletion of a todo-item

    // delete a checked item

    const firstDeleteBtn = todoContainer.querySelectorAll("input[type=submit]")[0];
    firstDeleteBtn.click();

    assert.equals(numberOfTasks.textContent, '1');
    assert.equals(openTasks.textContent, '1');      // remains!

    // delete an unchecked item

    const secondDeleteBtn = todoContainer.querySelectorAll("input[type=submit]")[0];
    secondDeleteBtn.click();

    assert.equals(numberOfTasks.textContent, '0');
    assert.equals(openTasks.textContent, '0');      // changes

});
