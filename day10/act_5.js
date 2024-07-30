// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const itemList = document.querySelector('#itemList');

        itemList.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                console.log(event.target.textContent);
            }
        });


// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const itemListNew = document.querySelector('#itemList2');
const addItemButton = document.querySelector('#addItemButton');
let itemCount = 2;

addItemButton.addEventListener('click', function() {
    itemCount++;
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCount}`;
    itemListNew.appendChild(newItem);
})