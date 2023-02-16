//<<<<<<ONE>>>>>>//
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();

// Instead of using the function keyword, you use the class keyword for creating JS classes. For example,
class Person {
  constructor(name) {
    this.name = name;
  }
}
// creating an object
const person10 = new Person('John');
const person2 = new Person('Jack');

console.log(person1.name); // John
console.log(person2.name); // Jack
// Here, person1 and person2 are objects of Person class.

// Note: The constructor() method inside a class gets called automatically each time an object is created.

//<<<<<THREE>>>>///


class Person {
    constructor(name) {
    this.name = name;
  }

    // defining method
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

let person11 = new Person('John');

// accessing property
console.log(person11.name); // John

// accessing method
person111.greet(); // Hello John


//<<<<<FOUR>>>>>>//

class Person {
    constructor(name) {
        this.name = name;
    }

    // getter
    get personName() {
        return this.name;
    }

    // setter
    set personName(x) {
        this.name = x;
    }
}

let person19 = new Person('Jack');
console.log(person1.name); // Jack

// changing the value of name property
person1.personName = 'Sarah';
console.log(person19.name); // Sarah

//<<<<<<FIVE>>>>//////

// accessing class
const person1 = new Person(); // ReferenceError

// defining class
class Person {
  constructor(name) {
    this.name = name;
  }
}

// As you can see, accessing a class before defining it throws an error.

//<<<<<SIX>>>>>//
class Person {
    constructor() {
      a = 0;
      this.name = a;
    }
  }
  
  let p1 = new Person(); // ReferenceError: Can't find variable: a


  //<<<<<<SEVEN>>>>>//

// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

}

let student = new Student('Jack');
student.greet();

//Output
// Hello Jack

//<<<<<<EIGHT>>>>//

// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

    constructor(name) {
    
        console.log("Creating student class");
        
        // call the super class constructor and pass in the name parameter
        super(name);
    }

}

let student1 = new Student('Jack');
student1.greet();

// Here, super inside Student class refers to the Person class.

//<<<<<<NINE>>>>>>>//
 // parent class
class Person { 
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed";
    }
    
    greet() {
        console.log(`Hello ${this.name}.`);
    }
 
}

// inheriting parent class
class Student extends Person {

    constructor(name) {
        
        // call the super class constructor and pass in the name parameter
        super(name);
        
        // Overriding an occupation property
        this.occupation = 'Student';
    }
    
    // overriding Person's method
    greet() {
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);
    }
}

let p = new Student('Jack');
p.greet();

// Output
// Hello student Jack.
// occupation: Student

// Here, the occupation property and the greet() method are present in parent Person class and the child Student class


class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }