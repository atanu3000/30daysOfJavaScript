// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

const paragraph = document.getElementById('paragraph');
const changeText = document.getElementById('changeText');

changeText.addEventListener('click', () => {
    paragraph.innerText = 'This is a new paragraph.'
})

// Task 10: Add a mouseover event listener to an element that changes its border color.

changeText.addEventListener('mouseover', () => {
    changeText.style.borderColor = 'red'
})