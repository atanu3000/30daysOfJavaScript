// Task 8: Use a `for...in` loop to iterate over the properties of the book object and log each property and its value.

let book = {
    title: 'Gintanjali',
    author: 'Rabindranath Tagore',
    year: 1910,
}

for (const prop in book) {
    console.log(prop + ': ' + book[prop]);
}

/*
Output:

title: Gintanjali
author: Rabindranath Tagore
year: 1910
*/

// Task 9: Use `Object.keys` and `Object.values` methods to log all the keys and values of the book object.

let keys = Object.keys(book);

let values = Object.values(book);

console.log("Keys:", keys); 
console.log("Values:", values); 

// Outputs: Keys: [ 'title', 'author', 'year' ]
//          Values: [ 'Gintanjali', 'Rabindranath Tagore', 1910 ]