// Task 3: Add a mouseover event listener to an element that changes its background color. 

const box = document.getElementById('color-box')

box.addEventListener('mouseover', () => {
    box.style.backgroundColor = '#FF0'
})

// Task 4: Add a mouseout event listener to an element that resets its background color.

box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'beige'
})