let num = 0;
async function increment() {
  num += await 2; // Promise.resolve(2), this gets paused,
  // promise pauses the execution of the function at this
  // line and continues to execute the rest of the main stack
  // equivalent to writing num = num + await 2
  // where num is replaced with 0 then we await before adding 2 to num which
  // was given a value of 0 when increment() was called then after completing the
  // main stack the await executes which adds 2 then the console.log executes
  console.log(num);
}

increment(); // await causes a delay which means the console.log inside of it doesn't execute right away, the rest of the main stack runs first
num += 1; // num = num + 1
console.log(num); // num = 1
/*
 * What is the resulting output?
 * 2, 3 x
 * 1, 3 x
 * 1, 2
 * 2, 1 x
 */
