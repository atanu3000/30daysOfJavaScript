// Task 9: Write a higher order function that takes a function and a number, and calls the function that many times

function repeat(func, n) {
    for (let i = 0; i < 5; i++) {
        func()
    }
}

function hello() {
    console.log("hello");
}

repeat(hello, 3)

/*
Output: 
        hello
        hello
        hello
        hello
        hello
*/

// Task 10: Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

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

// Output: 25