// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

matrix.forEach(row =>
    row.forEach(n => console.log(n))
)

/*
Output: 
        1
        2
        3
        4
        5
        6
        7
        8
        9
*/

// Task 13: Access and log a specific element from the two-dimensional array.

let matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let n1 = matrix2[0][1]
let n2 = matrix2[2][0]

console.log(n1 + " " + n2);

// Output: 2 7