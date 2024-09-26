// npm i -g typescript to install package globally

// "tcs index.js" it will check the code for potential error then convert into js file to execut nomrally

console.log("Hello TypeScript");

var course = "mca";
//ts will not allow this
// course = 43;
/* we can do node index.js but it will simply behave like normal 
js like it will allow dynamically changing of variable at run time.*/
console.log("course", course);

// IMPLICIT Types

let helloWorld = "Hello World,!";
// it will automatically figure out type of varibale by the assigned type of value(literals)

// helloWorld = false;
// same here it will show error like it already a string type of variable

// EXPLICIT Types

let firstname: string = "Ajay";
let age: number = 23;

// same here it will show error like it already a string type of variable
// firstname = 21;
// age = "chintu";

// TUPLE

// Creating a type to use
type stringAndNumber = [string, number];

let x: stringAndNumber = ["hey", 1];

// In TypeScript, an interface is a powerful way to define the structure of an object.

interface Person {
  name: string;
  age: number;
}

// correct {tick emoji}
let user: Person = {
  name: "Ajay",
  age: 23,
};

// wrong (cross tick emoji)

/*let user: Person = {
    name: 33,
    age: "xyz",
  };
  */

interface User extends Person {
  email: string;
}

//  extends property kinda Inheritence

let dude: User = {
  name: "chintu",
  age: 31,
  email: "xyz@gmail.com",
};

function len(param: string | any[]) {
  return param.length;
}
console.log(len("ajay"));
