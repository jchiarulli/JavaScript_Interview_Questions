console.log("a");
let timmy = setTimeout(function () {
  console.log("b");
}, 1);
let timothy = setTimeout(function () {
  console.log("c");
}, 10);
let timer = setTimeout(function () {
  console.log("d");
}, 0);
console.log("e");

// What is the order of the output of the letters
// and why?

// a - first line and nothing is stopping it from executing once
// the line is reached
// e - next since b, c, & d all inside of a setTimeout
// which takes the callback function off of the main
// event loop and sets it aside as something that needs
// to be run in the future the value of the delay doesn't
// matter because it's still viewed as an async operation
// b - b has a 1ms delay and d has 0ms delay why isn't d coming
// before b? b was the first setTimeout to be taken off of the main
// event loop, then c was set aside, then d was set aside, now a and e
// take more than 1ms to run and since b was set aside first it comes
// back first
// d - takes less than the time it takes to finish a & e, but b also
// takes less than the time it takes to finish a & e and was put aside
// first so again b finishes before d
// c - takes longer than it takes to finish executing a & e, so b will
// come back, then d since they're both finished, then c finishes

// the second argument to setTimeout isn't an exact number it is a
// minimum delay, i.e., the minimum amount of time that must pass
// before the code can run
// So, the order you put the setTimeouts in as well as the given delay
// will determine when they finish executing
