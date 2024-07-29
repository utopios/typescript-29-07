//Variable Before ES6+
// Declaration and initialization of a variable
var x = 10;       // x is a number
console.log(typeof x); // "number"

x = "hello";      // x becomes a string
console.log(typeof x); // "string"

x = true;         // x becomes a boolean
console.log(typeof x); // "boolean"

// Scoping (variable scope)
if (true) {
    var y = 20;
}
console.log(y); // 20 (y is accessible outside the if block)