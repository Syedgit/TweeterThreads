

//<<<ONE>>>>////
// async function example
async function asyncFunc() {
    console.log('Async function.');
    return Promise.resolve(1);
}

asyncFunc(); 

  ////<<<TWO>>>///
 // a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();

  ////<<<<THREE>>>>////
  
  // async function using expression 
  const fetchDataFromApi = async function() {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const json = await res.json();
    console.log(json.joke);
  }

  // calling async function using arrow 
   const  fetchDataFromApi = async () => {
      const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
      const json = await res.json();
      console.log(json.joke);
  }

  //<<<<FOUR>>>>//
  // async can hanlde multiple promises with short lines of code.
let promise1;
let promise2;
let promise3;

async function asyncFunc() {
    let result1 = await promise1;
    let result2 = await promise2;
    let result3 = await promise3;

    console.log(result1);
    console.log(result1);
    console.log(result1);
}

// calling the async function
asyncFunc(); // Promise resolved

//<<<FIVE>>>///

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise; 

        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}
//<<<<SIX>>>>////

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    reject('Promise rejected')}, 4000); 
});

// async function
async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise; 

        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}

// calling the async function
asyncFunc(); // Promise rejected

// calling the async function
asyncFunc(); // Promise resolved
///<<<<Seven>>>////
const contents = await getFileContents('this-file-does-not-exist.md', 'utf-8')
  .catch((error) => {
    console.log('Something went wrong!');
    console.warn(error);
  });
console.log(contents);

//Output 
/*Something went wrong!
[Error: ENOENT: no such file or directory, open 'this-file-does-not-exist.md'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'this-file-does-not-exist.md'
}
undefined*/

//<<<asyns multiple promosises>>>////


// Return a value 

async function myAsyncFn() {
    const result = await myPromise;
    return result;
  }
  
  myAsyncFn().then(console.log); // logs "Hello from the Promise" after 2 seconds
  