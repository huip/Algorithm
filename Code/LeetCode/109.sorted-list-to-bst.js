/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (head === null) {
        return head
    }
    let count = 1
    let nums = []
    while (head.next) {
        nums.push(head.val)
        head = head.next
        count++
    }
    nums.push(head.val)
    function buildTree(nums, left, right) {
        if (left > right) {
            return null
        }
        let mid = Math.floor((left + right) / 2)
        let node = {
            val: nums[mid],
            left: buildTree(nums, left, mid - 1),
            right: buildTree(nums, mid + 1, right)
        }
        return node
    }
    return buildTree(nums, 0, count - 1)
};