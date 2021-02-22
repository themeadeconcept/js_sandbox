// Destructuring
let a, b;
[a, b] = [100, 200];
// Rest Pattern - the Rest operator will store the overflow in an array
[a, b, ...rest] = [100, 200, 300, 400, 500];

// console.log(a);
// console.log(b);

// console.log(rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(a, b);
console.log(rest);

// Array Destructuring
// const people = ["John", "Carmichael", "Billie"]; // name the array and the values
// const [person1, person2, person3] = people; // set the variables to each value
// console.log(person1, person2, person3); // values set to variables in order

// Parse array returned from function
// function getPeople() {
//   // Function for the array
//   return ["John", "Beth", "Mike"];
// }

// let person1, person2, person3; // Declare variables
// [person1, person2, person3] = getPeople(); // Set the function return to variables
// console.log(person1, person2, person3); // log each variables new value

// Object Destructuring

const person = {
  name: "John Doe",
  age: 32,
  city: "Miami",
  gender: "Male",
  sayHello: function () {
    console.log("Hello");
  },
};

// Old ES5
// const name = person.name,
//   age = person.age,
//   city = person.city;

// New ES6 Destructuring
const { name, age, city, sayHello } = person; //  set the constant variables to object properties
console.log(name, age, city); //  log the values of props
sayHello(); // Call function from object
