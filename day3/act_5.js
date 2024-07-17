// Task 7: WAP to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result

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

// Output: not leap year