// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log new array to the console.

let arr = [1, 2, 3, 4, 5];
let newArray = [...arr, 6, 7, 8];

console.log(newArray);

// Output: [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sumAll(...arr) {
    return arr.reduce((prev, cur) => prev + cur, 0)
}

console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3, 4));

// Output:
// 3 
// 10