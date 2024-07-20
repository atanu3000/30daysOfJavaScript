// Task 3: Write a function expression to find the maximum of two numbers and log the result.

function maxOf2(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    return num2
}

console.log(maxOf2(15, 12));

// Output: 15

// Task 4: Write a function expression to concatenate two strings and return the result.

function concat_2_str(str1, str2) {
    return str1 + str2 
}

console.log(concat_2_str('hello', 'world'));

// Output: helloworld