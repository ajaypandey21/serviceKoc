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
var helloWorld = "Hello World,!";
// it will automatically figure out type of varibale by the assigned type of value(literals)
// helloWorld = false;
// same here it will show error like it already a string type of variable
// EXPLICIT Types
var firstname = "Ajay";
var age = 23;
var x = ["hey", 1];
// correct {tick emoji}
var user = {
    name: "Ajay",
    age: 23,
};
// wrong (cross tick emoji)
/*let user: Person = {
    name: 33,
    age: "xyz",
  };
  */
