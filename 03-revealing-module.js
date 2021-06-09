// Revealing Module Pattern
// Turn this object literal into a module that only exposes the render method

// let myModule = {
//     data: [],
//     render: () => {

//     },
//     add: () => {

//     },
//     remove: () => {

//     }
// }

// myModule.render()

// Pattern is an approach to take when writing code
// Revealing Module Pattern is one of those patterns
// Module refers to some self contained code
// Revealing is how we expose the only the things we want

// Need to start off with an iife - immediately invoked function expression

// () - immediately invoked & function(){} is the function expression
// Everything decalred inside of the function will cease to exist after the function has finished running,
// so if we want to use them after the function finishes running we have to return something from the function
// Now, since we only want to expose the render method we only return render and assign a pointer to the render method
// What was the point of decalring the other methods if we're only returning the render method?
// Well we can, e.g., set up click listeners for _add and _remove that operate on the _data array
let myModule = (function () {
  let _data = [];
  let _render = function () {
    // click listeners for _add and _remove
    console.log(_data);
  };
  let _add = function () {
    _data.push("asdf");
  };
  let _remove = function () {
    _data.pop();
  };
  return {
    render: _render,
  };
})();

myModule.render(); // runs the render method which can then access the _add & _remove methods which operate on the _data array through the click event listeners
myModule._data = [1, 2];
console.log(myModule._data); // this will fail
myModule.render();
// myModule._add(); // this will fail
// myModule._remove(); // this will fail
