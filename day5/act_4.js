// Task 7: Write a function that takes two parameters and return their product. Provide a default value for the second parameter.

function mul(num1, num2 = 5) {
    return num1 * num2
}

console.log(mul(10));
console.log(mul(10, 12));

// Output: 50
//         120


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provided default value for the age.

function greet(name, age = 25) {
    return `Hello ${name}, you're just ${age}`;
}

console.log(greet('Jack'));
console.log(greet('Keyra', 30));

// Output: 
// Hello Jack, you're just 25
// Hello Keyra, you're just 30