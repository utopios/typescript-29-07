//"use strict"
function demo(w) {
    console.log(w)
    console.log("Simple function")
    console.log(this)
}

demo()

const demo2 = function() {
    console.log("Second way")
}

const demo3 = () => {
    console.log("Arrow functions")
}

function showMessage(from, text = "No text provided") {
    console.log(from + ": " + text);
  }
  showMessage("Ihab"); // Ihab: Empty text

let sum = (a, b) => a + b;

let total = sum(10,20)