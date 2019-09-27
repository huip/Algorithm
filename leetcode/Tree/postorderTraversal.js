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
var postorderTraversal = function (root) {
    let res = []
    function postOrder(node) {
        if (node != null) {
            postOrder(node.left)
            postOrder(node.right)
            res.push(node.val)
        }
    }
    postOrder(root)
    return res
};