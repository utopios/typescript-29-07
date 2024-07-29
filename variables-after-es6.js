// Declaration and initialization with let and const
let a = 10;       // a is a number
console.log(typeof a); // "number"

a = "hello";      // a becomes a string
console.log(typeof a); // "string"

const b = 20;     // b is a constant and cannot be reassigned
console.log(typeof b); // "number"

// Attempt to reassign b
// b = 30; // Error: Assignment to constant variable.

// Scoping (variable scope)
if (true) {
    let c = 30;
    console.log(c); // 30 (c is accessible here)
}
 console.log(c); // Error: c is not defined (c is not accessible outside the if block)