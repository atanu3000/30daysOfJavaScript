//  Task 3: WAP to find the largest of three numbers using nested if-else statements

{
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

    // Output: 17
}