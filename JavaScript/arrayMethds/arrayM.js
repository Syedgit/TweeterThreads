/*ONE--array.forEach(callback) - executes a provided function once for each array element:*/
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});
// Output:
// 1
// 2
// 3
// 4
// 5
/*TWO--array.map(callback) - creates a new array with the results of calling a provided function on every element in the calling array:*/
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(numbers);
// Output: [ 1, 2, 3, 4, 5 ]
console.log(doubledNumbers);
// Output: [ 2, 4, 6, 8, 10 ]

/*THREE--array.filter(callback) - creates a new array with all elements that pass the test implemented by the provided function:*/
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(numbers);
// Output: [ 1, 2, 3, 4, 5 ]
console.log(evenNumbers);
// Output: [ 2, 4 ]

/*FOUR---array.reduce(callback, initialValue) - applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value:*/

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);
// Output: 15

/*FIVE---array.find(callback) - returns the value of the first element in the array that satisfies the provided testing function. It returns undefined if no element passes the test:*/

let numbers = [1, 2, 3, 4, 5];
let firstEvenNumber = numbers.find(function(number) {
  return number % 2 === 0;
});
console.log(firstEvenNumber);
// Output: 2

/*SIX--array.findIndex(callback) - returns the index of the first element in the array that satisfies the provided testing function. It returns -1 if no element passes the test:*/

let numbers = [1, 2, 3, 4, 5];
let indexOfFirstEvenNumber = numbers.findIndex(function(number) {
  return number % 2 === 0;
});
console.log(indexOfFirstEvenNumber);
// Output: 1

/*SEVEN--array.includes(element, start) - determines whether an array includes a certain element, returning true or false as appropriate:*/

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3));
// Output: true
console.log(numbers.includes(6));
// Output: false

