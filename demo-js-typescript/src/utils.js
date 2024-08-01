export function proccess(...args) {
    console.log(args)
}



/**
 * 
 * @param {import("./some-module").SomeType} myValue 
 */
function doSomething(myValue) {
    console.log(myValue.id, myValue.name);
}