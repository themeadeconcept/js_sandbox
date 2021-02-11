let val;

// Number to string
val = String(55464563);
val = String(4 + 4);
// Boolean to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// String to number
val = Number("5");
val = Number(true); // parsing a "true" value will equal 1, false will equal 0
val = Number(null); // null also yields 0
val = Number("hello"); // returns NaN
val = Number([1, 2, 3]); //also returns NaN

val = parseInt("100"); // returns an int, parse float allows decimals
val = parseFloat("100.30");

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
// toFixed allows us to specify decimals
console.log(val.toFixed(2)); // will throw an error if not used on a number

const val1 = String(5); //turns val2 into a string and yields 56
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
