// Task 5: Select an HTML element and remove it from the DOM.

document.getElementById('remove').remove()

// Task 6: Remove the last child of a specific HTML element.

const container = document.getElementById('listForRemove')
container.removeChild(container.lastChild)