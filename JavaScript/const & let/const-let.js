/*ONE*/
const name = "John";
console.log(name); // Output: John

name = "Jane"; // TypeError: Assignment to constant variable

let age = 30;
console.log(age); // Output: 30

age = 35;
console.log(age); // Output: 35

/*TWO*/
// block level scoping

if (true) {
    const message = "Hello";
    console.log(message); // Output: Hello
 }
 console.log(message); // ReferenceError: message is not defined

 /*THREE*/
 // Function level scoping 

 function greet() {
    if (true) {
       const message = "Hello";
       console.log(message); // Output: Hello
    }
    console.log(message); // ReferenceError: message is not defined
 }
 greet();
 
 /*FOUR*/

 //Temporal Dead Zone

 console.log(message); // ReferenceError: message is not defined

let message = "Hello";


/*FIVE*/

//Hoisting 

console.log(message); // ReferenceError: message is not defined
const message = "Hello";

console.log(age); // ReferenceError: age is not defined
let age = 30;
