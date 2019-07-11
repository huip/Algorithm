/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min.apply(Math, this.stack)
};

var minStack = new MinStack()
minStack.push(-2);

minStack.push(0);
minStack.push(-3);

console.log(minStack.getMin())

minStack.pop()

console.log(minStack.top())

console.log(minStack.getMin())