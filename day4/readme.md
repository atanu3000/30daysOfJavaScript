# Loops

## Acrivity 1 - For Loop

### Task 1: WAP to print numbers from 1 to 10 using a for loop

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
    
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
7
8
9
10
```

### Task 2: WAP to print the multiplication table of 5 using a for loop

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5*i}`);
    
}
```

Output:
```
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
```

## Acrivity 2 - While Loop

### Task 3: WAP to calculate the sum of numbers from 1 to 10 using a while loop

```javascript
let sum = 0;
let num = 1;

while (num <= 10) {
    sum += num;
    num++;
}

console.log(sum);
```

Output:
```
55
```

### Task 4: WAP to print the numbers from 1 to 10 using a while loop

```javascript
let num = 1;

    while (num <= 10) {
        console.log(num);
        num++;
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
7
8
9
10
```

## Acrivity 3 - Do...While Loop

### Task 5: WAP to print the numbers from 1 to 5 using a do...while loop

```javascript
let n = 1;

do {
    console.log(n);
    n++;
} while (n <= 5);
```

Output:
```
1
2
3
4
5
```

### Task 6: WAP to calculate the factorial of a number using a do...while loop

```javascript
let num = 6;
let fact = 1;

do {
    fact *= num;
    num--;
} while (num !== 0);

console.log(fact);
```

Output:
```
720
```

## Acrivity 4 - Nested Loop

### Task 7: WAP to print a pattern using nested for loops:

```
*
* *
* * *
* * * *
* * * * *
```

```javascript
for (let i = 0; i < 5; i++) {
    let row = ''
    for (let j = 0; j <= i; j++) {
        row += '* '
        
    }
    console.log(row);
    
}
```

Output:
```
*
* *
* * *
* * * *
* * * * *
```

## Acrivity 5 - Loop Control Statements

### Task 8: WAP to print numbers from 1 to 10,but skip the number `5` using the `continue` statement

```javascript
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
    
}
```

Output:
```
1
2
3
4
6
7
8
9
10
```

### Task 9: WAP to print numbers from 1 to 10,but stop the loop when the number is `7` using the `break` statement

```javascript
for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
    
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