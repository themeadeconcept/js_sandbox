// // var, let, const

// var name = "John Doe";
// console.log(name);
// name = "steve smith";
// console.log(name);

// // init var
// var greeting; // this will log as undefined
// console.log(greeting);

// greeting = "hello";
// console.log(greeting);

// // letters, numbers, _, $  -- are the only characters a variable can have.. CANNOT START WITH A NUMBER

// // Multi word variables
// var camelCase = "camelCase";
// var underscore_method = "underscore_method";
// var PascalCase = "PascalCase";
// var dontdothis = "dontdothis";

// // LET
// let name;
// name = "John Doe";
// console.log(name);
// name = "steve smith";
// console.log(name);

// CONST
const name = "john";
console.log(name);
// can not reassign
// name = "sara";
// Have to assign a value, cannot initialize as undefined

const person = {
  name: "John",
  age: 30,
};

person.name = "Sara";
person.age = 32;

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);
