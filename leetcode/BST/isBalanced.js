/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    function balance(node) {
        if (node === null) {
            return 0
        }
        let left = balance(node.left)
        let right = balance(node.right)
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1
        }
        return (left > right
            ? left
            : right) + 1
    }
    return balance(root) != -1
};