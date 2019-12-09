/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {

    let r1Arr = []
    let r2Arr = []

    function dfs(node, values) {
        if (!node) {
            return
        }
        if (node.left == null && node.right == null) {
            values.push(node.val)
        }
        dfs(node.left, values)
        dfs(node.right, values)
    }

    dfs(root1, r1Arr)
    dfs(root2, r2Arr)

    return r1Arr.join('') == r2Arr.join('')

};