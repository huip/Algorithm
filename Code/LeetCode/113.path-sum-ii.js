/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    let res = []
    let p = []
    function dfs(node, currentNum, path) {
        if (node == null) {
            return
        }
        currentNum += node.val
        path.push(node.val)
        if (node.left == null && node.right == null && currentNum === sum) {
            res.push([...path])
        }
        dfs(node.left, currentNum, path)
        dfs(node.right, currentNum, path)
        path.pop()
    }
    dfs(root, 0, p)
    return res
};