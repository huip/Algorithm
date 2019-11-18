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

var isValidBST = function (root) {
    let last = -Infinity
    let flag = true
    function inOrder(node) {
        if (node == null) {
            return true
        }
        if (node.left) {
            inOrder(node.left)
        }
        if (node.val <= last) {
            flag = false
        }
        last = node.val
        if (node.right) {
            inOrder(node.right)
        }
    }
    inOrder(root)
    return flag
};