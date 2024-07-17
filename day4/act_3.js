// Task 5: WAP to print the numbers from 1 to 5 using a do...while loop

let n = 1;

do {
    console.log(n);
    n++;
} while (n <= 5);

/*
Output: 1
        2
        3
        4
        5
*/

// Task 6: WAP to calculate the factorial of a number using a do...while loop

let num = 6;
let fact = 1;

do {
    fact *= num;
    num--;
} while (num !== 0);

console.log(fact);

// Output: 720