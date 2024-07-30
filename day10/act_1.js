// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const changeText = document.getElementById('changeText');

changeText.addEventListener('click', () => {
    document.getElementById('para').innerText = 'This is a new paragraph'
})

// Task 2: Add a double-click event listener to an image that toggles its visibility.

const image = document.getElementById('android');

image.addEventListener('dblclick', () => {
    image.style.visibility = 'hidden';
})