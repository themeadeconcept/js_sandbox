// Create some arrrays
const numbers = [43, 56, 33, 23, 44, 36, 5]; // all numbers
const numbers2 = new Array(22, 45, 33, 76, 54); // declare all numbers different method
const fruit = ["Apple", "Banana", "Orange", "Pear"]; // all strings
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()]; // mixed array

let val;

// Get array length
val = numbers.length; // returns 7
// Check if is array
val = Array.isArray(numbers); // returns true
// Get single value
val = numbers[3]; // returns 23
val = numbers[0]; // returns 43
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// adds to end of array
// numbers.push(250);
// // add to front of array
// numbers.unshift(120);
// // take off from end
// numbers.pop();
// // take off from front
// numbers.shift();
// // splice values
// numbers.splice(1, 1);
// // reverse
// numbers.reverse();

// Concactenate array
val = numbers.concat(numbers2);

// sorting arrays
val = fruit.sort();
// val = numbers.sort();

// // use the "compare function"
// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// //reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

// Find
function over50(num) {
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);
