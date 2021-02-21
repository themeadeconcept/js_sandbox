// const sayHello = function () {
//   console.log("Hello");
// };

// const sayHello = () => {
//   console.log("Hello");
// };

//One Line function, does not need braces
// const sayHello = () => console.log("Hello");

// One line returns
// const sayHello = () => "Hello";

// Same as above
// const sayHello = function () {
//   return "Hello";
// };

// Can return object literal by wrapping in parenthesis (Return Object)
// const sayHello = () => ({
//   msg: "Hello",
// });

// If passing in a single parameter, parenthesis can be omitted
// const sayHello = (name) => console.log(`Hello ${name}`);

// Multiple params NEED parenthesis
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Torrey", "Meade");

const users = ["Nathan", "John", "William"];

// const nameLengths = users.map(function (name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);
