//<<<<ONE>>>>>??
const promise = new Promise((resolve, reject) => {
    // contain an operation
    // ...
  
    // return the state
    if (success) {
      resolve(value);
    } else {
      reject(error);
    }
  });

  //The promise constructor accepts a callback function that typically performs an asynchronous operation.
  // This function is often referred to as an executor.

  //<<<<<TWO>>>>>>//

  function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      }, 1000);
    });
  }
  
  const promise = getUsers();
  
  promise.then((users) => {
    console.log(users);
  });
  

  //OutPut 

  [
    { username: 'john', email: 'john@test.com' },
    { username: 'jane', email: 'jane@test.com' }
  ]

  //<<<<<THREE>>>>>>>

  let success = false;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

const promise = getUsers();

promise.catch((error) => {
  console.log(error);
});

//<<<<FOUR>>>>////

  
  getUsers()
    .then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      render();
    });
  
    //<<<<FIVE>>//

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

//Promise.all takes multiple promises as input and reolved 

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: 
// Array [3, 42, "foo"]


//<<<PROMISE.Resolve>>>////
const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);

});

// Expected output: 123

////<<<<Promise.Reject>>>///

function resolved(result) {
    console.log('Resolved');
  }
  
  function rejected(result) {
    console.error(result);
  }
  
  Promise.reject(new Error('fail')).then(resolved, rejected);
 
  // Expected output: Error: fail
  
  ///<<<Promise.Catch>>>>>///

  const promise1 = new Promise((resolve, reject) => {
    throw new Error('Uh-oh!');
  });
  
  promise1.catch((error) => {
    console.error(error);
  });

  // Expected output: Error: Uh-oh!
  
  ////<<<<Promise.then>>>>//////

  const promise1 = new Promise((resolve, reject) => {
    resolve('Success!');
  });
  
  promise1.then((value) => {
    console.log(value);
  });
  
// Expected output: "Success!"

// Define the Promise
let task = new Promise((resolve, reject) => {
  setTimeout(() => {
  
    // Reject the Promise
    reject("Promise has been rejected!");
  }, 2000);
});
  
task
  .then(
    (data) => {
      console.log(data);
    },
  
    // Handle any error
    (error) => {
      console.log("Error:", error);
    }
  )
  
  // Specify the code to be executed 
  // after the Promise is settled
  .finally(() => {
    console.log(
      "This is finally() block that is " +
      "executed after Promise is settled"
    );
  });