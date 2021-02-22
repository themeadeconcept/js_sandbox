// SETS - Store unique values of any type

// set is an object that must be instantiated
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add("A string");
set1.add({ name: "John" });
set1.add(true);
// Set makes sure that only unique values are added.  No duplicates.
set1.add(100);
// Logging set now, would still yield 4 items

// Another way to place values into a set
const set2 = new Set([1, true, "string"]);

// console.log(set1);
// console.log(set2);

// // Get count
// console.log(set1.size); // yields 4

// Check for values
// console.log(set1.has(100)); // yields true
// console.log(set1.has(50 + 50)); //yields true
// console.log(set1.has({ name: "John" })); // yields false because it is not a primitive value

// Delete from a set
set1.delete(100);

// console.log(set1); // yields 3

// ITERATING THROUGH SETS

// For...of
// Sets are not key values.  they are single values.  so set1.values would yield the same thing (accessing any property would yield the same)
for (let item of set1) {
  console.log(item);
}

// ForEach loop
set1.forEach((value) => {
  console.log(value);
});

// CONVERT SET TO AN ARRAY
const setArr = Array.from(set1);
console.log(setArr);
