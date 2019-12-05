/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    let height = 0
    let answer = -1
    function dfs(node, h) {
        if (!node) {
            return
        }
        if (node.left === null && node.right === null) {
            if (h > height) {
                answer = node.val
            }
        }
        dfs(node.left, h + 1)
        dfs(node.right, h + 1)
    }
    dfs(root, 1)
    return answer
};