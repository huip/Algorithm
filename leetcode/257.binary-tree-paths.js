/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (root == null) {
        return []
    }
    let res = []
    function helper(path, node) {
        path.push(node.val)
        if (node.left === null && node.right === null) {
            res.push(path.join('->'))
        }
        if (node.left) {
            helper(path, node.left)
        }
        if (node.right) {
            helper(path, node.right)
        }
        path.pop()
    }
    helper([], root)
    return res
};