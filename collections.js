const a = new Array() // []

const secondArray = [1, "strings value", []]


// Creating a Set
const mySet = new Set();

// Adding values
mySet.add(1);
mySet.add(5);
mySet.add(1); // Duplicate values are ignored

console.log(mySet); // Output: Set { 1, 5 }

// Checking for values
console.log(mySet.has(1)); // Output: true
console.log(mySet.has(3)); // Output: false

// Removing values
mySet.delete(5);
console.log(mySet); // Output: Set { 1 }

// Iterating over a Set
mySet.add(2);
mySet.add(3);
for (let item of mySet) {
    console.log(item); // Output: 1, 2, 3
}

// Getting the size of a Set
console.log(mySet.size); // Output: 3

const myArray = [1, 2, 3, 4];
console.log(myArray.length); // Output: 4
myArray.push(5); // Adds an element to the end
console.log(myArray); // Output: [1, 2, 3, 4, 5]

const myMap = new Map();

// Setting key-value pairs
myMap.set('name', 'Alice');
myMap.set('age', 30);

// Getting values by key
console.log(myMap.get('name')); // Output: Alice

// Checking for existence
console.log(myMap.has('age')); // Output: true

// Removing key-value pairs
myMap.delete('age');
console.log(myMap.size); // Output: 1

// Iterating over a Map
myMap.set('gender', 'female');
for (let [key, value] of myMap) {
    console.log(key, value); // Output: name Alice, gender female
}

const myWeakSet = new WeakSet();
const obj1 = { name: 'Alice' };
let obj2 = { name: 'Bob' };

myWeakSet.add(obj1);
myWeakSet.add(obj2);

console.log(myWeakSet.has(obj1)); // Output: true
obj2 = null
console.log(myWeakSet.has(obj2)); // Output: false

const myWeakMap = new WeakMap();
const key1 = {};
const key2 = {};

myWeakMap.set(key1, 'value1');
myWeakMap.set(key2, 'value2');

console.log(myWeakMap.get(key1)); // Output: value1
myWeakMap.delete(key2);
console.log(myWeakMap.has(key2)); // Output: false