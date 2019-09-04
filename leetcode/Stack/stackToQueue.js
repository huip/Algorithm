/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.stack1 = []
    this.stack2 = []
    this.front = ''
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    if (!this.stack1.length) {
        this.front = x
    }
    while (this.stack1.length) {
        this
            .stack2
            .push(this.stack1.pop())
    }
    this
        .stack2
        .push(x)
    while (this.stack2.length) {
        this
            .stack1
            .push(this.stack2.pop())
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let removeElement = this
        .stack1
        .pop()
    if(this.stack1.length) {
        this.front = this.stack1[this.stack1.length - 1]
    }
    return removeElement
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.front
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0
};