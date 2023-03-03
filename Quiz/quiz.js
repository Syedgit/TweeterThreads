
/* 

What is the output of the following code?

const x = 10;
console.log(`The value of x is ${x + 1}`);
Answer: The output will be "The value of x is 11".
Explanation: This code uses template literals to log a string that includes the value of the x variable plus 1.

What is the output of the following code?
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[10]);
Answer: The output will be undefined.
Explanation: This code tries to log the value of the 10th element of the numbers array, but there is no 10th element since the array only has 5 elements. Therefore, the result is undefined.

What is the output of the following code?
const myObject = { x: 1, y: 2 };
console.log(`My object has the following properties: ${myObject}`);
Answer: The output will be "My object has the following properties: [object Object]".
Explanation: This code uses template literals to log a string that includes the myObject variable, but since myObject is an object, it is converted to a string by calling its toString() method. The result is the string "[object Object]".

What is the output of the following code?
console.log(0.1 + 0.2);
Answer: The output will be 0.30000000000000004.
Explanation: This code performs a mathematical operation that involves floating point numbers, which can sometimes lead to precision errors. In this case, the result should be 0.3, but due to a precision error in the floating point arithmetic, the actual result is slightly different.
*/

const myObject = { x: 1, y: 2 };
console.log(`My object has the following properties: ${myObject}`);