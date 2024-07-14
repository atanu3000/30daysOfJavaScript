# Operators in JavaScript

## Activity 1 - Arithmatic operations

### Task 1: WAP to add two numbers and log the result

```javascript
let num1 = 10
let num2 = 20

let sum = num1 + num2
console.log("sum = " + sum)
```

Output:
```
sum = 30
```

### Task 2: WAP to subtract two numbers and log the result

```javascript
let num1 = 30
let num2 = 20

let sub = num1 - num2
console.log("sub = " + sub)
```

Output:
```
sub = 10
```

### Task 3: WAP to multiply two numbers and log the result

```javascript
let num1 = 15
let num2 = 4

let mul = num1 * num2
console.log("product = " + mul)
```

Output:
```
product = 60
```

### Task 4: WAP to divide two numbers and log the result

```javascript
let num1 = 30
let num2 = 2

let div = num1 / num2
console.log("quotient = " + div)
```

Output:
```
div = 15
```

### Task 5: WAP to find the remainder when one number is divide by another and log the result

```javascript
let num1 = 30
let num2 = 8

let rem = num1 % num2
console.log("remainer = " + rem)
```

Output:
```
remainer = 6
```

## Activity 2 - Assignment operators

### Task 6: Use the `+=` operator to add a number to a variable and log the result

```javascript
let v = 10
v += 10

console.log(v)
```

Output:
```
20
```

### Task 7: Use the `-=` operator to subtract a number from a variable and log the result

```javascript
let v = 10
v -= 5

console.log(v)
```

Output:
```
5
```

## Activity 3 - Comparison operators

### Task 8: WAP to compare two numbers using `>` and `<` operators and log the result

```javascript
let num1 = 10
let num2 = 20

console.log(num1 > num2)
console.log(num1 < num2)
```

Output:
```
false
true
```

### Task 9: WAP to compare two numbers using `>=` and `<=` operators and log the result

```javascript
let num = 10

console.log(num >= 10)
console.log(num <= 12)
```

Output:
```
true
true
```

### Task 10: WAP to compare two numbers using `==` and `===` operators and log the result

```javascript
let num = 10

console.log(num == '10')
console.log(num === '10')
```

Output:
```
true
false
```

## Activity 4 - Logical operators

### Task 11: WAP that uses the `&&` operator to combine two conditions and log the result

```javascript
let isSunny = true
let isWeekend = false

if (isSunny && isWeekend) {
    console.log('Today is sunny but not weekend')
} else {
    console.log('Today is not sunny nor weekend')
}
```

Output:
```
Today is not sunny nor weekend
```

### Task 12: WAP that uses the `||` operator to combine two conditions and log the result

```javascript
let isSunny = true
let isWeekend = false

if (isSunny || isWeekend) {
    console.log('Today is sunny but not weekend')
} else {
    console.log('Today is not sunny nor weekend')
}
```

Output:
```
Today is sunny but not weekend
```

### Task 13: WAP that uses the `!` operator to negate a condition and log the result

```javascript
let isAdult = false

if (!isAdult) {
    console.log('You are not an Adult')
}
```

Output:
```
You are not an Adult
```

## Actvity 5 - Ternary operator

### Task 14: WAP to use the Ternary operator to check if a number is positive or negative and log the result

```javascript
let num = -5

num > 0 ? console.log('Positive') : console.log('Negative')
```

Output:
```
Negative
```