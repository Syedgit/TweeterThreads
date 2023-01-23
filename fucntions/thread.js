/*
<<<<<<EIGHT>>>>>
*/
// function returns function which prints name
function printName() {
    return function printMyName() {
        console.log("Bhargav Bachina")
    }
}

// how to call
printName()()

// function takes arguments returns function which takes arguments and returns name
function printNameWithParams(firstName) {
    return function printMyName(lastName) {
        console.log(firstName + " " + lastName)
    }
}

// how to call
printNameWithParams("fname")("lname")

// function takes arguments returns function which takes arguments and returns addition
function addition(a) {
    return function add(b) {
        return a + b;
    }
}

// how to call
addition(10)(50)

// // functions nesting can go deep
function outer() {
    return function inner1() {
        return function inner2() {
            return function inner3() {
                return function inner4() {
                    return "returned from the inner function 4"
                }
            }
        }
    }
}

/*
<<<<<NINE>>>
*/


function myFunction() {
    console.log(this);
  }
  // Simple invocation
  myFunction(); // logs global object (window)
  
  //During a method invocation the value of this is the object owning the method:
  
  const myObject = {
    method() {
      console.log(this);
    }
  };
  // Method invocation
  myObject.method(); // logs myObject
  
  //During a constructor invocation using new keyword this equals to the newly created instance:
  
  function MyFunction() {
    console.log(this);
  }
  new MyFunction(); // logs an instance of MyFunction
  
 // In the following example, myMethod() is an outer function of callback() arrow function:
  
  const myObject = {
    myMethod(items) {
      console.log(this); // logs myObject
      const callback = () => {
        console.log(this); // logs myObject
      };
      items.forEach(callback);
    }
  };
  myObject.myMethod([1, 2, 3]); 
  //this value inside the arrow function callback() equals to this of the outer function myMethod().
  
  function myFunction() {
    console.log(this);
  }
  // Simple invocation
  myFunction(); // logs global object (window)
  
  //During a method invocation the value of this is the object owning the method:
  
  const myObject = {
    method() {
      console.log(this);
    }
  };
  // Method invocation
  myObject.method(); // logs myObject