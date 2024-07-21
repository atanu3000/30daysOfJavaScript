// Task 7: Use the `map` method to calculate the sum of all numbers in the array and log the result.

let array = [1, 2, 3, 4, 5, 6]

let sum = 0
array.map(num => sum += num)

console.log(sum);

// Output: 21

// Task 8: Use the `filter` method to create a new array with only even numbers and log the new array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even = arr.filter(num => num % 2 == 0)

console.log(even);

// Output: [ 2, 4, 6, 8, 10 ]

// Task 9: Use the `reduce` method to calculate the sum of all numbers in the array and log the result.

let arr2 = [1, 2, 3, 4, 5, 6]

let result = arr2.reduce((pre, n) => pre + n, 0)

console.log(result);