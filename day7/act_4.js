// Add a method to the book object thet uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.

let book = {
    title: 'Gintanjali',
    author: 'Rabindranath Tagore',
    year: 1910,
}

book.info = function () {
    return this.title + ' ' + this.year

}

console.log(book.info());