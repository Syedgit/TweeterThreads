//<<ONE Use meaningful and descriptive variable names:>>//
// Use meaningful and descriptive variable names: Use variable names that clearly describe the purpose and value they hold.

// Good example
const userName = 'John Doe';

// Bad example
const x = 'John Doe';

//<<<<TWO Use consistent indentation>>//
// Use consistent indentation: Indent your code to make it readable and visually appealing.

// Good example
function calculateSum(a, b) {
    return a + b;
}

// Bad example
function calculateSum(a,b){
return a+b;
}

//<<<<< THREE Keep code DRY (Don't Repeat Yourself):>>?//
// Keep code DRY (Don't Repeat Yourself): Avoid duplicating code by creating functions and reusable code blocks.

// Good example
function greeting(name) {
    return `Hello, ${name}!`;
}

console.log(greeting('John Doe')); // outputs: Hello, John Doe!
console.log(greeting('Jane Doe')); // outputs: Hello, Jane Doe!

// Bad example
console.log(`Hello, ${'John Doe'}!`); // outputs: Hello, John Doe!
console.log(`Hello, ${'Jane Doe'}!`); // outputs: Hello, Jane Doe!

//<<<<FOUR Use semicolon>>>////
// Use semicolons: Always use semicolons to end statements in JavaScript

// Good example
const name = 'John Doe';
console.log(`Hello, ${name}!`);

// Bad example (without semicolon)
const name = 'John Doe'
console.log(`Hello, ${name}!`)

///<<<FIVE Avoid global scope pollution:>>////
// Avoid global scope pollution: Use only what is needed in the global scope and keep the rest in a local scope.

// Good example
(function() {
    const name = 'John Doe';
    console.log(`Hello, ${name}!`);
})();

// Bad example
const name = 'John Doe';
console.log(`Hello, ${name}!`);

////<<<<SIX Write modular code:>>>////
// Write modular code: Break down your code into smaller, more manageable pieces for easier maintenance and debugging.

// Good example
function calculateSum(a, b) {
    return a + b;
}

function calculateDifference(a, b) {
    return a - b;
}

// Bad example
function calculate(a, b, operation) {
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'subtract') {
        return a - b;
    }
}

///<<<<<SEVEN Use strict mode:>>>////
// Use strict mode: Enable "strict mode" at the beginning of your code to avoid silent errors and enforce best practices

// Good example
'use strict';

const name = 'John Doe';
console.log(`Hello, ${name}!`);

// Bad example (without strict mode)
const name = 'John Doe';
console.log(`Hello, ${name}!`);

////<<<<EIGHT Use Comments>>>>///
// Use comments: Add meaningful comments to your code to explain what it is doing and why.

// Good example
// Calculate sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// Bad example (without comment)
function calculateSum(a, b) {
    return a + b;
}

///<<<<NINE Use appropriate data types:>>>////
// Use appropriate data types: Choose the right data type for each variable and use them consistently throughout your code.

// Good example
const name = 'John Doe';
const age = 30;

// Bad example (using incorrect data type)
const name = 'John Doe';
const age = '30';


///<<<<TEN Error Handling>>>///
// Use error handling: Catch and handle errors in your code using try-catch blocks.
// Keep code organized: Use consistent naming conventions and keep related code blocks together.
//Test your code: Regularly test your code to ensure it is working correctly and fix any bugs or issues that arise.
// Stay up-to-date with best practices: Stay informed about the latest trends and best practices in JavaScript development by following industry leaders and reading about new updates and features.

let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work

} catch (err) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( err.name );
  alert( err.message );
}




