/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (!root) {
        return 0
    }
    let ans = 0
    function inOrder(node) {
        if (!node) {
            return
        }
        if (node.val >= L && node.val <= R) {
            ans += node.val
        }
        if (node.val > L) {
            inOrder(node.left)
        }
        if (node.val < R) {
            inOrder(node.right)
        }
    }
    inOrder(root)
    return ans
};