// const firstname:string = "ihab"
var Stack = /** @class */ (function () {
    function Stack() {
        this._stack = [];
    }
    Stack.prototype.push = function (element) {
        this._stack.push(element);
    };
    Stack.prototype.getElementById = function (id) {
        return this._stack.find(function (e) { return e.id === id; });
    };
    return Stack;
}());
var myStack = new Stack();
myStack.push({ id: 'a' });
myStack.push({ id: 'b' });
myStack.push({ id: 'c' });
console.log(myStack.getElementById('b'));
