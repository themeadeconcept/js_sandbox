// ELEGANT WAY OF HANDLING ERRORS

const user = { email: "jdoe@gmail.com" };

try {
  // Will produce a Reference Error
  // myFunction();

  //Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError
  // eval("Hello World");

  // Will produce a URIError
  // decodeURIComponent("%");

  if (!user.name) {
    // throw "User has no name";
    throw new SyntaxError("User has no name");
  }
} catch (err) {
  console.log(`User Error: ${err.message}`);
  // console.log(err.message);
  // console.log(err.name);
  // console.log(err instanceof ReferenceError);
} finally {
  console.log("Finally runs regardless of result...");
}

console.log("Program continues...");
