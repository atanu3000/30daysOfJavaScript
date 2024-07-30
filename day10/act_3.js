// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const input = document.getElementById('inputText');

input.addEventListener('keydown', (e) => {
    console.log(e.key)
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

const input2 = document.getElementById('inputText2');

input2.addEventListener('keyup', (e) => {
    console.log(e.target.value)
})