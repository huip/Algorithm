/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (!root) {
        return false
    }
    let depth = {}
    let parent = {}
    function dfs(node, par) {
        if (node) {
            depth[node.val] = par ? 1 + depth[par.val] : 0
            parent[node.val] = par
            dfs(node.left, node)
            dfs(node.right, node)
        }
    }
    dfs(root, null)
    return depth[x] === depth[y] && parent[x] !== parent[y]
};