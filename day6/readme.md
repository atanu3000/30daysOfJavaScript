# Arrays

## Activity 1 - Array creation and access

### Task 1: Create and array a number from one to five and log the array to the console.

```javascript
let array = [];

for (let i = 1; i <= 5; i++) {
    array.push(i);
}

console.log(array);
```

Output:
```
[ 1, 2, 3, 4, 5 ]
```

### Task 2: Access are first and last elements of the array and log them to the console.

```javascript
let arr = [ 1, 2, 3, 4, 5 ];

let first = arr[0]
let last = arr[arr.length - 1]

console.log(`first: ${first}, last: ${last}`);
```

Output:
```
first: 1, last: 5
```


## Activity 2 - Array methods (Basic)

### Task 3: Use the `push` method to add a new number to the end of the array and log the updated array.

```javascript
let arr = new Array(1, 2, 3, 4, 5);

arr.push(6);

console.log(arr);
```

Output:
```
[ 1, 2, 3, 4, 5, 6 ]
```

### Task 4: Use the `pop` method to remove the last element from the array and log the updated array.

```javascript
let arr2 = new Array(1, 2, 3, 4, 5);

arr2.pop();

console.log(arr2);
```

Output:
```
[ 1, 2, 3, 4 ]
```

### Task 5: Use the `shift` method to remove the first element from the array and log the updated array.

```javascript
let arr3 = [1, 2, 3, 4, 5];

arr3.shift();

console.log(arr3);
```

Output:
```
[ 2, 3, 4, 5 ]
```

### Task 6: Use the `unshift` method to add a new number to the beggining of the array and log the updated array.

```javascript
let arr4 = [1, 2, 3, 4, 5];

arr4.unshift(10);

console.log(arr4);
```

Output:
```
[ 10, 1, 2, 3, 4, 5 ]
```

## Activity 3 - Array methods (Intermediate)

### Task 7: Use the `map` method to calculate the sum of all numbers in the array and log the result.

```javascript
let array = [1, 2, 3, 4, 5, 6]

let sum = 0
array.map(num => sum += num)

console.log(sum);
```

Output:
```
21
```

### Task 8: Use the `filter` method to create a new array with only even numbers and log the new array.

```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even = arr.filter(num => num % 2 == 0)

console.log(even);
```

Output:
```
[ 2, 4, 6, 8, 10 ]
```

### Task 9: Use the `reduce` method to calculate the sum of all numbers in the array and log the result.

```javascript
let arr2 = [1, 2, 3, 4, 5, 6]

let result = arr2.reduce((pre, n) => pre + n, 0)

console.log(result);
```

Output:
```
21
```

## Activity 4 - Array Iteration

### Task 10: Use a `for` loop to iterate over the array and log each element to the console.

```javascript
let array = [1, 2, 3, 4, 5, 6]

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}
```

Output:
```
1
2
3
4
5
6
```

### Task 11: Use the `forEach` method to iterate over the array and log each element to the console.

```javascript
let arr = [1, 2, 3, 4, 5, 6]

arr.forEach(element => {
    console.log(element);
});
```

Output:
```
1
2
3
4
5
6
```

## Activity 5 - Multi-dimensional Arrays

### Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

```javascript
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

matrix.forEach(row =>
    row.forEach(n => console.log(n))
)
```

Output:
```
1
2
3
4
5
6
7
8
9
```

### Task 13: Access and log a specific element from the two-dimensional array.

```javascript
let matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let n1 = matrix2[0][1]
let n2 = matrix2[2][0]

console.log(n1 + " " + n2);
```

Output:
```
2 7
```


