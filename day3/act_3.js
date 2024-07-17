// Task 4: WAP that uses a switch case to determine the day of the week based on a number (1-7) and log the result.

{
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


    // Output: Friday
}

// Task 5: WAP that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade

{
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

    // output: D
}