# ES6+ Features

## Activity 1 - Template Literals

### Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

```javascript
let name = 'John';
let age = 21;

let str = `Hey ${name}, are you ${age} now?`;

console.log(str);
```

Output: 
```
Hey John, are you 21 now?
```

### Task 2: Create a multi-line string using template literals and log it to the console.

```javascript
let blog = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Dolorem, explicabo quos provident pariatur ipsam unde vel 
totam doloribus est temporibus?`

console.log(blog);
```

Output: 
```
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Dolorem, explicabo quos provident pariatur ipsam unde vel
totam doloribus est temporibus?
```

## Activity 2 - Destructuring

### Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

```javascript
let array = [1, 2, 3, 4, 5];

let [first, second] = array;

console.log(first, second);
```

Output: 
```
1 2
```

### Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

```javascript
let book = {
    title: 'Gintanjali',
    author: 'Rabindranath Tagore',
    year: 1910,
}

let { title,  author } = book;

console.log(title, author);
```

Output: 
```
Gintanjali Rabindranath Tagore
```

## Activity 3 - Spread and rest Operators

### Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log new array to the console.

```javascript
let arr = [1, 2, 3, 4, 5];
let newArray = [...arr, 6, 7, 8];

console.log(newArray);
```

Output: 
```
[ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

### Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

```javascript
function sumAll(...arr) {
    return arr.reduce((prev, cur) => prev + cur, 0)
}

console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3, 4));
```

Output: 
```
3
10
```

## Activity 4 - Default Parameters

### Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. log the result of calling the function with and without the second parameter.

```javascript
function product(num1, num2 = 1) {
    return num1 * num2;
}

console.log(product(5));
console.log(product(5, 2));
```

Output: 
```
5
10
```

## Activity 5 - Enhanced Object Literals

### Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

```javascript
const uname = "Alice";
const age = 25;

const user = {
    // Shorthand property names
    uname,
    age,
    
    // Method definitions
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    
    // Computed property names
    ["user_" + uname.toLowerCase()]: true
};

console.log(user.uname);
console.log(user.age);
console.log(user.greet());
console.log(user.user_alice);
```

Output: 
```
Alice
25
Hello, my name is Alice and I am 25 years old.
true
```

### Task 9: Create an object with computed property names based on variables and log the object to the console.

```javascript
const uname = "Alice";
const age = 25;

const user = {
    uname,
    age,
    
    // Computed property names
    ["user_" + uname.toLowerCase()]: true
};

console.log(user.user_alice);
```

Output: 
```
true
```
