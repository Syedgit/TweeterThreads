//<<<ONE>>>//
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  // while loop
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  
  // do-while loop
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  
  // for-in loop
  const object = {a: 1, b: 2, c: 3};
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
  
  // for-of loop
  const array = [1, 2, 3, 4, 5];
  for (const value of array) {
    console.log(value);
  }


  //<<<<ONE>>>>>>//
// program to display numbers from 1 to 5
const n = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    console.log(i);     // printing the value of i
}

// Output 
1
2
3
4
5

//<<<TWO>>>>>//

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);

// Output

Enter a number: 2
Enter a number: 5
Enter a number: 7
Enter a number: 0
Enter a number: -3
The sum is 14.

//<<<<THREE>>>>>//

// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)

console.log(`The sum is ${sum}.`);

// Output 

Enter a number: 2
Enter a number: 4
Enter a number: -500
The sum is 6.

//<<<<FOUR>>>>//

// array
const students = ['John', 'Sara', 'Jack'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}


// Output

John
Sara
Jack

///<<<FIVE>>>>//

// using for..in loop with object
const salaries= {
  Jack : 24000,
  Paul : 34000,
  Monica : 55000
}
// using for...in
for ( let i in salaries) {

  // add a currency symbol
  let salary = "$" + salaries[i];

  // display the values
  console.log(`${i} : ${salary}`);
}

// Output of Object loop
Jack : $24000,
Paul : $34000,
Monica : $55000

// using for..in loop with array 
const arr = [ 'hello', 1, 'JavaScript' ];

// using for...in loop
for (let x in arr) {
    console.log(arr[x]);
}
// Output of array loop
hello
1
JavaScript

//<<<<SIX>>>>>>//

const students = ['John', 'Sara', 'Jack'];

students.forEach(element => {
  console.log(element);
});

// output 

John
Sara
Jack