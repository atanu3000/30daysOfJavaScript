// Task 1: Create and array a number from one to five and log the array to the console.

let array = [];

for (let i = 1; i <= 5; i++) {
    array.push(i);
}

console.log(array);

// Output: [ 1, 2, 3, 4, 5 ]

// Task 2: Exes are fast and last elements of the array and log them to the console.

let arr = [ 1, 2, 3, 4, 5 ];

let first = arr[0]
let last = arr[arr.length - 1]

console.log(`first: ${first}, last: ${last}`);

// Output: first: 1, last: 5