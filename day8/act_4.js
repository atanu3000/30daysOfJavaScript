// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. log the result of calling the function with and without the second parameter.

function product(num1, num2 = 1) {
    return num1 * num2;
}

console.log(product(5));
console.log(product(5, 2));

// Output:
// 5
// 10