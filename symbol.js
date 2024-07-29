const sym1 = Symbol("descirption")
const sym2 = Symbol("descirption")

const COLOR_RED = Symbol('red');
const COLOR_GREEN = Symbol('green');

function getColor(color) {
    switch (color) {
        case COLOR_RED:
            return 'red';
        case COLOR_GREEN:
            return 'green';
        default:
            return 'unknown color';
    }
}

console.log(getColor(COLOR_RED)); // "red"
console.log(getColor(Symbol('red'))); // "unknown color"


let obj = {
    [sym1]: 'value1',
    [sym2]: 'value2'
};

console.log(obj[sym1]); // "value1"
console.log(obj[sym2]); // "value2"