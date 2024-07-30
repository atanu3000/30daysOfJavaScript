# Event Handling
`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="para">
        This is a sample paragraph.
    </p>
    <button type="button" id="changeText">Change Text</button>
    <br>
    <img id="android" src="./android.svg" alt="android" width="100px">

    <div id="color-box" style="width: 200px; height: 120px; background-color: beige;"></div>

    <br>
    <input type="text" id="inputText" placeholder="Hit any key...">
    <input type="text" id="inputText2" placeholder="write anything...">

    <br><br>
    <form id="form">
        <input type="text" class="value" placeholder="Enter your name">
        <input type="text" class="value" placeholder="Enter your email">
    </form>
    
    <br><br>
    <select id="options">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
    </select>
    <p class="selected-value"></p>

    <br>
    <ul id="itemList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
    </ul>

    <br>
    <button id="addItemButton">Add Item</button>
    <ul id="itemList2">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</body>

<script src="act_1.js"></script>
<script src="act_2.js"></script>
<script src="act_3.js"></script>
<script src="act_4.js"></script>
<script src="act_5.js"></script>
</html>
```

## Activity 1: Basic Event Handling

### Task 1: Add a click event listener to a button that changes the text content of a paragraph.

```js
const changeText = document.getElementById('changeText');

changeText.addEventListener('click', () => {
    document.getElementById('para').innerText = 'This is a new paragraph'
})
```

### Task 2: Add a double-click event listener to an image that toggles its visibility.

```js
const image = document.getElementById('android');

image.addEventListener('dblclick', () => {
    image.style.visibility = 'hidden';
})
```

## Activity 2: Mouse Events

### Task 3: Add a mouseover event listener to an element that changes its background color. 

```js
const box = document.getElementById('color-box')

box.addEventListener('mouseover', () => {
    box.style.backgroundColor = '#FF0'
})
```
### Task 4: Add a mouseout event listener to an element that resets its background color.

```js
box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'beige'
})
```

## Activity 3: Keyboard Events

### Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

```js
const input = document.getElementById('inputText');

input.addEventListener('keydown', (e) => {
    console.log(e.key)
})
```

### Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

```js
const input2 = document.getElementById('inputText2');

input2.addEventListener('keyup', (e) => {
    console.log(e.target.value)
})
```

## Activity 4: Form Events

### Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

```js
const form = document.getElementById("form");
const submitter = document.getElementById("submitbtn");
const inputValue = document.querySelectorAll(".value")

form.addEventListener('submit', function(e) {
    e.preventDefault();
    inputValue.forEach((input) => {
       console.log(input.value)
    })
})
```

### Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

```js
const option = document.getElementById("options");
const value = document.querySelector(".selected-value");

option.addEventListener("change", () => {
    value.innerText = option.value;
})
```

## Activity 5: Event Delegation

### Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

```js
const itemList = document.querySelector('#itemList');

        itemList.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                console.log(event.target.textContent);
            }
        });
```

### Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

```js
const itemListNew = document.querySelector('#itemList2');
const addItemButton = document.querySelector('#addItemButton');
let itemCount = 2;

addItemButton.addEventListener('click', function() {
    itemCount++;
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCount}`;
    itemListNew.appendChild(newItem);
})
```