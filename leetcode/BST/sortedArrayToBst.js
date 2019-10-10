/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    function buildTree(arr, left, right) {
        if (left > right) {
            return null
        }
        let mid = left + Math.floor((right - left) / 2)
        return {
            val: arr[mid],
            left: buildTree(arr, left, mid - 1),
            right: buildTree(arr, mid + 1, right)
        }
    }
    return nums.length
        ? buildTree(nums, 0, nums.length - 1)
        : null
};