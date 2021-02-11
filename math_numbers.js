const num1 = 100;
const num2 = 50;
let val;

// Simple Math /w Numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI; // will set val to 3.14.....
val = Math.E; // Eulers number
val = Math.round(2.8); // will round up at 5, down below 5
val = Math.ceil(2.4); //always rounds up
val = Math.floor(2.8); //always rounds down
val = Math.sqrt(64); // will give use the square root
val = Math.abs(-3); // returns the absolute (positive) value
val = Math.pow(8, 2); // equals 64 , will be 8 squared
val = Math.min(1, 21431, 43232432, 2342, 1213); // will return minimum value
val = Math.max(1, 21431, 43232432, 2342, 1213); // will return maximum value
val = Math.random(); // will gives us a random decimal by itself (value less than 1)

val = Math.random() * 20; // will give us a random number with a decimal between 0 and 19.  Add a 1 and it will be 1-20

val = Math.floor(Math.random() * 20 + 1); // this will get rid of decimal because math.floor will round it down

console.log(val);
