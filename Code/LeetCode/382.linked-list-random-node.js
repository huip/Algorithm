var Solution = function (head) {
    this.head = head
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    let current = this.head
    let val = current.val
    let n = 1
    current = current.next
    while (current) {
        n++ 
        if (Math.random() % n === 0) {
            return current.val
        }
        current = current.next
    }
    return val
};