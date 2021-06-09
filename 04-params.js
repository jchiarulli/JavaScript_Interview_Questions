let f = function (a, b) {
  // arguments available inside of every function except arrow functions
  // tells us the number of available arguments
  // arguments is an Array-like object accessible inside functions that
  // contains the values of the arguments passed to that function.
  // Always a length property for a function which represents the number
  // of parameters a function is decalred with
  if (arguments.length === f.length) {
    console.log("We have a match");
  } else {
    console.log("No match");
  }
};

// determine if the function received the number of params it expected
f(1);
f(1, 2);
f(1, 2, 3);
