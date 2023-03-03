// ONE

const arr = [1, 2, [3, 4, [5, 6]]];
const flattened = arr.flat(2);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

//Two
const str = 'The quick brown fox jumps over the lazy dog';
const replaced = str.replaceAll('the', 'a');
console.log(replaced); // Output: 'The quick brown fox jumps over a lazy dog'

//THREE

const promises = [
    Promise.resolve(1),
    Promise.reject(new Error('error')),
    Promise.resolve(3)
  ];
  
  Promise.allSettled(promises)
    .then(results => console.log(results))
    .catch(error => console.error(error));
  // Output: [{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: Error('error') }, { status: 'fulfilled', value: 3 }]

  //FOUR
const arr = ['a', 'b', 'c'];
console.log(arr.at(1)); // Output: 'b'
console.log(arr.at(-1)); // Output: 'c'

//FIVE

const entries = [['a', 1], ['b', 2], ['c', 3]];
const obj = Object.fromEntries(entries);
console.log(obj); // Output: { a: 1, b: 2, c: 3 }
