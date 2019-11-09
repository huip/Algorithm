/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let nums = []
    function inOrder(node) {
        if (node === null) {
            return
        }
        if (node.left) {
            inOrder(node.left)
        }
        nums.push(node.val)
        if (node.right) {
            inOrder(node.right)
        }
    }
    inOrder(root)
    return nums[k - 1]
};