// Regular Expressions
// Used to describe a pattern of characters, pattern searching and matching
// used for validation and pulling things out of a body of text (email, phone, social security, etc)
let re;
re = /hello/;
// -i flag - case insensitive
re = /hello/i;
// global search (searches everything)
// re = /hello/g;

// Gives expression within
// console.log(re.source);

// exec() - Return result in an array or returns null
// const result = re.exec("1hello world");
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false if match
// const result = re.test("Hello");
// console.log(result);

// match() - Return result array or null
// const str = "Hello There";
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match, if not found, returns -1
// const str = "Hello There";
// const result = str.search(re);
// console.log(result);

// replace() - return new string with some or all matches of a pattern
const str = "Hello There";
const newStr = str.replace(re, "Hi");
console.log(newStr);
