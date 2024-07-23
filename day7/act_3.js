// Task 5: Create a nested object representing the library with properties like name and books (an array of book objects), and log the object to the console.

let library = {
    name: 'the national library',
    books: [
        { title: 'book1' },
        { title: 'book2' },
        { title: 'book3' },
    ]
}

console.log(library);

// Output: 
/*
{
  name: 'the national library',
  books: [ { title: 'book1' }, { title: 'book2' }, { title: 'book3' } ]
}
*/

// Task 6: Access and log the name of the library and the title of all the books in the library.

let lib_name = library.name

console.log(lib_name);

library.books.map((book) => console.log(book.title))

// Output: 
/*
the national library
book1
book2
book3
*/