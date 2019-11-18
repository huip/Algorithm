/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let res = []
    function preOrder(node) {
        if (node != null) {
            res.push(node.val)
            preOrder(node.left)
            preOrder(node.right)
        }
    }
    preOrder(root)
    return res
};