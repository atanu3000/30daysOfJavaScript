// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const uname = "Alice";
const age = 25;

const user = {
    // Shorthand property names
    uname,
    age,

    // Method definitions
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },

    // Computed property names
    ["user_" + uname.toLowerCase()]: true
};

console.log(user.uname);
console.log(user.age);
console.log(user.greet());
console.log(user.user_alice);

// Outputs: Alice
// Outputs: 25
// Outputs: Hello, my name is Alice and I am 25 years old.
// Outputs: true

// Task 9: Create an object with computed property names based on variables and log the object to the console.

{
    const uname = "Alice";
    const age = 25;

    const user = {
        uname,
        age,

        // Computed property names
        ["user_" + uname.toLowerCase()]: true
    };

    console.log(user.user_alice);
}
// Output: 