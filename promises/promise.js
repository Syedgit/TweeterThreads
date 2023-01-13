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
  