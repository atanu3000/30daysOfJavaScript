# Functions

## Actvity 1 - Function Declaration

### Task1: Write a function to check if a number is even or odd and log the result.

```javascript
function isEven(num) {
    if (num % 2 == 0) {
        return "even number"
    } else {
        return "odd number"
    }
}

console.log(isEven(8));
```

Output: 
```
even number
```

### Task 2: Write a function to calculate the square of a number and log the result.

```javascript
function square(num) {
    return num ** 2
}

console.log(square(5));
```

Output: 
```
25
```

## Actvity 2 - Function Expression

### Task 3: Write a function expression to find the maximum of two numbers and log the result.

```javascript
function maxOf2(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    return num2
}

console.log(maxOf2(15, 12));
```

Output: 
```
15
```

### Task 4: Write a function expression to concatenate two strings and return the result.
 
```javascript
function concat_2_str(str1, str2) {
    return str1 + str2 
}

console.log(concat_2_str('hello', 'world'));
```

Output: 
```
helloworld
```

## Actvity 3 - Arrow Functions

### Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

```javascript
function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(10, 12));
```

Output: 
```
22
```

### Task 6: Write an arrow function to check if a string contains a specific character and written a Boolean value.

```javascript
function checkStr(str, char) {
    if (str.includes(char)) {
        return true
    }
    return false
}

console.log(checkStr('hello world', 'a'));
```

Output: 
```
false
```

## Actvity 4 - Function Parameters and Default Values

### Task 7: Write a function that takes two parameters and return their product. Provide a default value for the second parameter.

```javascript
function mul(num1, num2 = 5) {
    return num1 * num2
}

console.log(mul(10));
console.log(mul(10, 12));
```

Output: 
```
50
120
```

### Task 8: Write a function that takes a person's name and age and returns a greeting message. Provided default value for the age.

```javascript
function greet(name, age = 25) {
    return `Hello ${name}, you're just ${age}`;
}

console.log(greet('Jack'));
console.log(greet('Keyra', 30));
```

Output: 
```
Hello Jack, you're just 25
Hello Keyra, you're just 30
```

## Actvity 5 -Higher-Order Functions

### Task 9: Write a higher order function that takes a function and a number, and calls the function that many times

```javascript
function repeat(func, n) {
    for (let i = 0; i < 5; i++) {
        func()
    }
}

function hello() {
    console.log("hello");
}

repeat(hello, 3)
```

Output: 
```
hello
hello
hello
hello
hello
```

### Task 10: Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

```javascript
function compose(f, g, x) {
    return g(f(x))
}

function addTwo(n) {
    return n + 2
}

function square(n) {
    return n ** 2
}

console.log(compose(addTwo, square, 3));
```

Output: 
```
25
```
