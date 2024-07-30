// Task 7: Select an HTML element and change one of its attributes (e.g., `src` of an `img` tag).

const image = document.querySelector('.image');
// image.src = './apple.svg'    
// OR
image.setAttribute('src', './apple.svg');

// Task 8: Add and remove a CSS class to/from an HTML element.

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');

line1.classList.remove('blue');
line2.classList.add('blue');