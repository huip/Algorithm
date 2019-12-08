/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if (!root) {
        return true
    }
    let val = root.val
    let flag = true
    function dfs(node) {
        if (!node) {
            return
        }
        if (val != node.val) {
            flag = false
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return flag
};