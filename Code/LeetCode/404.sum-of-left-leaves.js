/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let sum = 0
    if (!root) {
        return sum
    }
    if (root.left && !root.left.left && !root.left.right) {
        return root.left.val + sumOfLeftLeaves(root.right)
    }
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};