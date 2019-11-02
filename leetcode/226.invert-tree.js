/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root === null) {
        return root
    }
    function dfs(node) {
        if (node) {
            let tempLeft = node.left
            node.left = node.right
            node.right = tempLeft
            dfs(node.left)
            dfs(node.right)
        }
    }
    dfs(root)
    return root
};