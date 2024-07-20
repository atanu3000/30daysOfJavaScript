// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(10, 12));

// Output: 22

// Task 6: Write an arrow function to check if a string contains a specific character and written a Boolean value.

function checkStr(str, char) {
    if (str.includes(char)) {
        return true
    }
    return false
}

console.log(checkStr('hello world', 'a'));

// Output: false