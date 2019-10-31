/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let pre = null
    function dfs(node) {
        if (node == null) {
            return
        }
        dfs(node.right)
        dfs(node.left)
        node.right = pre
        node.left = null
        pre = node
    }
    dfs(root)
};