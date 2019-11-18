/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.index = -1
    let data = []
    inOrder(root)
    this.data = data
    function inOrder(node) {
        if (node === null) {
            return true
        }
        if (node.left) {
            inOrder(node.left)
        }
        data.push(node.val)
        if (node.right) {
            inOrder(node.right)
        }
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    this.index = this.index + 1
    return this.data[this.index]
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    if (this.index < this.data.length - 1) {
        return true
    }
    return false
};