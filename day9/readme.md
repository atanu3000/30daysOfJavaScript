# DOM Manipulation

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            .blue {
                color: rgb(40, 88, 212);
            }
        </style>
    </head>
    <body>
        <div id="text">Task 1: Sample text</div>
        <div class="color">Task 2: Sample color</div>
        <ul id="myList">
            <li>Existing list</li>
        </ul>
        <p id="remove">This is a temp element</p>
        <ul id="listForRemove">
            <li>1st element</li>
            <li>2nd element</li>
            <li>last element</li>
        </ul>
        <div>
            <img class="image" src="./android.svg" width="100px"  alt="">
        </div>
        <p id="line1" class="blue">This is a line</p>
        <p id="line2">This is a another line</p>

        <p id="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, cum!
        </p>

        <button type="button" id="changeText">
            Change Text
        </button>

    </body>

    <script src="act_1.js"></script>
    <script src="act_2.js"></script>
    <script src="act_3.js"></script>
    <script src="act_4.js"></script>
    <script src="act_5.js"></script>
</html>
```

## Activity 1: Selecting and Manipulating Elements

### Task 1: Select an HTML element by its ID and change its text content. 

```js
const text = document.getElementById('text')
text.innerText = 'Task 1: Hello Guys!'
```

### Task 2: Select an HTML element by its class and change its background color.

```js
const colorElement = document.querySelector('.color')
colorElement.style.backgroundColor = 'lightblue'
```

## Activity 2: Creating and Appending Elements

### Task 3: Create a new `div` element with some text content and append it to the body.

```js
const element = document.createElement('div');
element.innerText = 'Task 3: Creating new div'

document.body.appendChild(element);
```

### Task 4: Create a new `li` element and add it to an existing `ul` list.

```js
const list = document.getElementById('myList')
const newList = document.createElement('li')
newList.innerText = 'Task 4: new element'
list.appendChild(newList);
```

## Activity 3: Removing Elements

### Task 5: Select an HTML element and remove it from the DOM.

```js
document.getElementById('remove').remove()
```

### Task 6: Remove the last child of a specific HTML element.

```js
const container = document.getElementById('listForRemove')
container.removeChild(container.lastChild)
```

## Activity 4: Modifying Attributes and Classes

### Task 7: Select an HTML element and change one of its attributes (e.g., `src` of an `img` tag).

```js
const image = document.querySelector('.image');
// image.src = './apple.svg'    
// OR
image.setAttribute('src', './apple.svg');
```

### Task 8: Add and remove a CSS class to/from an HTML element.

```js
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');

line1.classList.remove('blue');
line2.classList.add('blue');
```

## Activity 5: Event Handling

### Task 9: Add a click event listener to a button that changes the text content of a paragraph. 

```js
const paragraph = document.getElementById('paragraph');
const changeText = document.getElementById('changeText');

changeText.addEventListener('click', () => {
    paragraph.innerText = 'This is a new paragraph.'
})
```

### Task 10: Add a mouseover event listener to an element that changes its border color.

```js
changeText.addEventListener('mouseover', () => {
    changeText.style.borderColor = 'red'
})
```
