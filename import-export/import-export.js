/*ONE*/

// myModule.js
export const name = "John";
export function greet() {
   console.log("Hello");
}

/*TWO*/

// main.js
import { name, greet } from "./myModule.js";

console.log(name); // Output: John
greet(); // Output: Hello

/*THREE*/

// main.js
import * as myModule from "./myModule.js";

console.log(myModule.name); // Output: John
myModule.greet(); // Output: Hello
