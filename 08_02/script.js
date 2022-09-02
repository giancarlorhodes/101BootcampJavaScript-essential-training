/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration:
// global, therefore if we reuse the name someplace else, it's reference will be overwritten
// doSomeMath = "car";
// function is just a word for "advanced variable"
function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

// Function expression:
// preferred pattern
const doMoreMath = function (a = 3, b = 2) {
  let c = a * b;
  return c;
};

const x = doMoreMath;

console.log("x is: " + x(1,1));

const y = doMoreMath(0, 0); // y is number because of the return type
//console.log("y is: " + y(1,1));
console.log ("y is typeof " + typeof y);
console.log ("x is typeof " + typeof x);

console.log("Do some math:", doSomeMath(5, 6));
console.log("Do more math:", doMoreMath(5, 6));


const yyy = (a, b) => { return a + b;}

// Immediately Invoked Function Expression (IIFE)
// (function () {
//   let a = 4;
//   let b = 6;
//   let c = doSomeMath(a, b);
//   console.log(`The sum of a and b is: ${c}`);
// })();
