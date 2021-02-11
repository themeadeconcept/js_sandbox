const firstName = "William";
const lastName = "Johnson";
const age = 34;
const str = "Hello there, my name is Torrey";
const tags = "Web design, development, programming";

let val;

// adds 2 strings with no space
val = firstName + lastName;

// Concactenation
val = firstName + " " + lastName;

// Append (not replace, append will add onto a string)
val = "Torrey ";
val += "Meade";

val = "Hello, my name is " + firstName + " and I am " + age;

//Escaping
val = "That's awesome, I can't wait"; // Double quotes would escape this also

// length - counts the number of characters in the string
val = firstName.length;

//concat
val = firstName.concat(" ", lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0]; // returns the index of the first value

// indexOf()
val = firstName.indexOf("l"); // returns index of the value
val = firstName.lastIndexOf("l"); // returns index of the value

// charAt()
val = firstName.charAt("2");

// grabs last character of a string
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 4); //start and end parameters in the index

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3); // counts from the back and slices the end

// split()
val = str.split(" ");
val = tags.split(","); // splits at commas

// replace()
val = str.replace("Torrey", "Jack");

// includes() - returns true or false if value is found
val = str.includes("Hello");

console.log(val);
