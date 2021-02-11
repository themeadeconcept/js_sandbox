// ONE OF THE MOST IMPORT CONTROL STRUCTIONS
// FUNCTIONS ARE BLOCKS OF CODE THAT CAN BE DEFINED AND CALLED AT A LATER TIME

// FUNCTION DECLARATIONS

function greet(firstName = "John", lastName = "Winkle") {
  //declares defaults OLD STYLE
  // if(typeof firstName === "undefined"){firstName = "John"}
  // if(typeof lastName === "undefined"){lastName = "John"}
  // console.log("Hello");
  return "Hello" + " " + firstName + " " + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function (x = 4) {
  return x * x;
};

console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// FUNCTION I DECLARE AND RUN AT THE SAME TIME

// (function (name) {
//   console.log("Hello " + name);
// })("Torrey");

// PROPERTY METHODS

const todo = {
  add: function () {
    console.log("Add todo...");
  },
  edit: function (id) {
    console.log(`Edit todo`);
  },
};

todo.delete = function () {
  console.log("Delete todo");
};

todo.add();
todo.edit(22);
todo.delete();
