/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.q1 = []
    this.q2 = []
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this
        .q2
        .push(x)
    let count = this.q1.length
    while (count--) {
        this
            .q2
            .push(this.q1.shift())
    }
    this.q1 = this.q2
    this.q2 = []
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this
        .q1
        .shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.q1[0]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0
};