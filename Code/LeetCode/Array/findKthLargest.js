/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    nums.sort((a, b) => {
        return a - b
    })
    let cursor = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        cursor++
        if (cursor == k) {
            return nums[i]
        }
    }
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6], 2))