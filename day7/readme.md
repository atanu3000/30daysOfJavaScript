# Objects

## Activity 1 - Object creation and Access

### Task 1: Create an object representing a book with properties like title, author and year and log the object to the console

```javascript
let book = {
    title: 'Gintanjali',
    author: 'Rabindranath Tagore',
    year: 1910,
}

console.log(book);
```

Output:
```
{ title: 'Gintanjali', author: 'Rabindranath Tagore', year: 1910 }
```

### Task 2: Access and log the tittle and author properties of the book object.

```javascript
let title = book.title
let author = book.author

console.log(`Title: ${title}, Author: ${author}`);
```

Output:
```
Title: Gintanjali, Author: Rabindranath Tagore
```

## Activity 2 - Object Methods

### Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

```javascript
let book = {
    title: 'Gintanjali',
    author: 'Rabindranath Tagore',
    year: 1910,
}

book.info = function () {
    return this.title + ' ' + this.author

}

console.log(book.info());
```

Output:
```
Gintanjali Rabindranath Tagore
```

### Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

```javascript
book.updateYear = function () {
    this.year = 2010
}

book.updateYear()

console.log(book.year);
```

Output:
```
2010
```

## Activity 3 - Nested Object

### Task 5: Create a nested object representing the library with properties like name and books (an array of book objects), and log the object to the console.

```javascript
let library = {
    name: 'the national library',
    book: [
        { title: 'book1' },
        { title: 'book2' },
        { title: 'book3' },
    ]
}

console.log(library);
```

Output:
```
{
  name: 'the national library',
  books: [ { title: 'book1' }, { title: 'book2' }, { title: 'book3' } ]
}
```

### Task 6: Access and log the name of the library and the title of all the books in the library.

```javascript
let lib_name = library.name

console.log(lib_name);

library.books.map((book) => console.log(book.title))
```

Output:
```
the national library
book1
book2
book3
```

## Activity 4 - The `this` keyword

### Task 7: Add a method to the book object thet uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.

```javascript
let book = {
    title: 'Gintanjali',
    author: 'Rabindranath Tagore',
    year: 1910,
}

book.info = function () {
    return this.title + ' ' + this.year

}

console.log(book.info());
```

Output:
```
Gintanjali 1910
```

## Activity 5 - Object Iteration 

### Task 8: Use a `for...in` loop to iterate over the properties of the book object and log each property and its value.

```javascript
let book = {
    title: 'Gintanjali',
    author: 'Rabindranath Tagore',
    year: 1910,
}

for (const prop in book) {
    console.log(prop + ': ' + book[prop]);
}
```

Output:
```
title: Gintanjali
author: Rabindranath Tagore
year: 1910
```

### Task 9: Use `Object.keys` and `Object.values` methods to log all the keys and values of the book object.

```javascript
let keys = Object.keys(book);

let values = Object.values(book);

console.log("Keys:", keys); 
console.log("Values:", values); 
```

Output:
```
Keys: [ 'title', 'author', 'year' ]
Values: [ 'Gintanjali', 'Rabindranath Tagore', 1910 ]
```