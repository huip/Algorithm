/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    if (!root) {
        return 0
    }
    function dfs(node, min, max) {
        if (node === null) {
            return 0
        }
        if (node.val < min) {
            min = node.val
        }
        if(node.val > max) {
            max = node.val
        }
        if (node.left === null  && node.right === null) {
            return max - min
        }
        let left = dfs(node.left, min, max)
        let right = dfs(node.right, min, max)
        return left > right ? left : right

    }
    let left = dfs(root.left, root.val, root.val)
    let right = dfs(root.right, root.val, root.val)
    return left > right ? left : right
};