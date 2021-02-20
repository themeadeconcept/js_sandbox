let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // ^ - Must start with - h (i means case doesn't matter)
re = /d$/i; // $ - Must end with - d
re = /^hello$/i; // Start and end with hello
re = /h.llo/i; // . - means it's a wild card character
re = /h*llo/i; // * - means it matches any character 0 or more times
re = /gre?a?y/i; // ? - Optional Character
re = /gre?a?y\?/i; // \ - Escape Character

// Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an a or an e
re = /[GF]rey/i; // Must ba G or an F
re = /[^GF]rey/; // Will match anything except G / F
re = /[A-Z]ray/; // Will match any uppercase letter
re = /[a-z]ray/; // Will match any lowercase letter
re = /[A-Za-z]ray/; // Will match any letter
re = /[0-9]ray/; // will match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exacdtly (n) amount of times
re = /Hel{2, 4}o/i; // Can have 2-4 l's
re = /Hel{2,}o/i; // Must occur at leats (n) times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Character Classes
re = /\w/; // Word character = alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word Characters
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any non-digit
re = /\s/; // Match any whitespace
re = /\S/; // Match any non-whitespace character

// Assertions
re = /x(?=y)/; // Match x only if it's followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
const str = "x";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
