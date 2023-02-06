//<<<<IF>>>//
// check if the number is positive

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
 // the body of the if statement
  console.log("The number is positive");
}


//<<<<IF-ELSE>>>///
// check if the number is positive or negative/zero

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}



///<<<IF-ELSE-IF>>>>?//
// check if the number if positive, negative or zero
const number = prompt("Enter a number: ");


// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

console.log("The if...else if...else statement is easy");

//<<<<NESTED-IF-ELSE-IF>>>>

// check if the number is positive, negative or zero
const number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}
///<<ONE>>>////
// check the age to determine the eligibility to vote
let age = 15;
let result;

if (age >= 18) {
      result = "You are eligible to vote.";
} else {
      result = "You are not eligible to vote yet.";
}

// ternary operator to check the eligibility to vote
let age = 15;
let result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);

//Output
//You are not eligible to vote yet.

//<<<THREE>>>
// program to check if number is positive, negative or zero
let score = 85;
let grade;
if(score >= 80){
    grade = "A";
} else if (score >= 70) {
    grade = "B";
} else if (score >= 60) {
    grade = "C";
} else {
    grade = "D";
}
// Shorthand and convert to ternary operator 
let score = 85;
let grade = score >= 80 ? "A" 
  : score >= 70 ? "B" 
  : score >= 60 ? "C" 
  : "D";

console.log(`Your exam grade is ${grade}`);

//Output 
// "A"

//<<<<FOUR>>>???
// program to check if number is positive, negative or zero
let a = 3;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);

// Output
// The number is positive.
