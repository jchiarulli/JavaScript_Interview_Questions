// ASI, object literals, square bracket syntax, hoisting
// What happens when you run this code? why?
// How would you fix it?

// We get a ReferenceError since this inside of the square brackets is not defined
// At first glance a appears to be defined since it's being declared and initialized in the code above the ReferenceError
// This is caused by automatic semi-colon injection, i.e., there initially
// was no semi-colon after the last bracket when delcaring a
// If you put a curly brace with no semi-colon after it and then the next line begins with a square bracker
// JavaScript will look at it and determine the syntax is valid
let a = {
  a: 123,
}; // semi-colon assigns a value before attempting to call forEach on the array
[a].forEach(function (x) {
  console.log(x);
});

// Gets hoisted to the top and declared and contains the value of undefined
// let a;
// Now without the semi-colon we have the curly braces with the property inside of it and then the square brackets with the variable a which
// is undefined, so we're looking inside of the object that has the key undefined and there isn't one, so when we attempt to do a forEach it
// fails since we're doing it on something that doesn't exist
// a = {
//   a: 123,
// }[a].forEach(function (x) {});

// Same as writing this
// let a;
// a = { a: 123 }[undefined].forEach(function (x) {});

// It determines the syntax is valid since we have a variable and the variable contains something
// then if you can use square bracket notation to create an array and put the object inside of the array
// which allows you to use forEach on it
// The square bracket syntax allows us to access properties in the object it's being used on by passing the name of the property as a string
// Without the quotation marks it's a variable name and not a property name, so JavaScript will scan upwards to find the variable with that name
// let obj = {a: 123};
// [obj].forEach()
// {
//     a: 123
// }["a"]
