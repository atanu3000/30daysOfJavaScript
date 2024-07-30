// Task 3: Create a new `div` element with some text content and append it to the body.

const element = document.createElement('div');
element.innerText = 'Task 3: Creating new div'

document.body.appendChild(element);

// Task 4: Create a new `li` element and add it to an existing `ul` list.

const list = document.getElementById('myList')
const newList = document.createElement('li')
newList.innerText = 'Task 4: new element'
list.appendChild(newList);
