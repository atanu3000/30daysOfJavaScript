# Control structures

## Activity 1 - If-Else statements

### Task 1: WAP to check if a number is positive, negative or zero, log the result.

```javascript
    let num = -5;

    if (num > 0) {
        console.log("Positive number");
    } else if (num < 0) {
        console.log("Negative number");
    } else {
        console.log("Zero");
    }
```

Output: 
```
Negative number
```

### Task 2: WAP to check if a person is eligible for vold (age >= 18) and log the result.

```javascript
    let age = 21;

    if (age >= 18) {
        console.log("Eligible for voteing");
    } else {
        console.log("Not eligible for voteing");
    }
```

Output:
```
Eligible for voteing
```

## Activity 2 - Nested if else statement

### Task3: WAP to find the largest of three numbers using nested if-else statements

```javascript
    let num1 = 17;
    let num2 = 15;
    let num3 = 12;

    if (num1 > num2) {
        if (num1 > num3) {
            console.log(num1);
        } else {
            console.log(num3);
        }
    } else {
        if (num2 > num3) {
            console.log(num2);
        } else {
            console.log(num3);
        }
    }
```

Output:
```
17
```

## Activity 3 - Switch Cases

### Task 4: WAP that uses a switch case to determine the day of the week based on a number (1-7) and log the result.

```javascript
    let weekday = 6;

    switch (weekday) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid weekday");
            break;
    }
```

Output:
```
Friday
```

### Task 5: WAP that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade

```javascript
let score = 45;

    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("A");
            break;
        case (score >= 70 && score <= 90):
            console.log("B");
            break;
        case (score >= 50 && score <= 70):
            console.log("C");
            break;
        case (score >= 35 && score <= 50):
            console.log("D");
            break;
        case (score <= 34 && score >= 0):
            console.log("F");
            break;
        default:
            console.log("Invalid score");
            break;
    }
```

Output: 
```
D
```

## Activity 4 - Conditional (Ternary) Operator

### Task 6: WAP that uses the ternary operator to check if a number is even or odd and log the result

```javascript
let num = 8;

num % 2 === 0 ? console.log("Even") : console.log("Odd");
```

Output: 
```
Even
```

## Activity 5 - Combining Conditions 

### Task 7: WAP to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result

```javascript
let year = 2100;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("leap year");
        } else {
            console.log("not leap year");
        }
    } else {
        console.log("leap year");
    }
} else {
    console.log("not leap year");
}
```

Output: 
```
not leap year
```