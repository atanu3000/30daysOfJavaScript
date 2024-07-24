// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let array = [1, 2, 3, 4, 5];

let [first, second] = array;

console.log(first, second);

// Output: 1 2

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title: 'Gintanjali',
    author: 'Rabindranath Tagore',
    year: 1910,
}

let { title,  author } = book;

console.log(title, author);

// Output: Gintanjali Rabindranath Tagore