// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

let book = {
    title: 'Gintanjali',
    author: 'Rabindranath Tagore',
    year: 1910,
}

book.info = function () {
    return this.title + ' ' + this.author

}

console.log(book.info());

// Output: Gintanjali Rabindranath Tagore

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function () {
    this.year = 2010
}

book.updateYear()

console.log(book.year);

// Output: 2010