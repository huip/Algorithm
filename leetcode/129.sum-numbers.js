/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    let sum = 0
    if (root === null) {
        return sum
    }
    let res = []
    let p = []
    function dfs(node, path) {
        path.push(node.val)
        if (node.left == null && node.right == null) {
            res.push(+ path.join(''))
        }
        if (node.left) {
            dfs(node.left, path)
        }
        if (node.right) {
            dfs(node.right, path)
        }
        path.pop()

    }
    dfs(root, p)
    res.map((num) => {
        sum += num
    })
    return sum
};