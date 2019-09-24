/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length === 0) {
        return -1
    }
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = left + Math.floor(right - left) / 2
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < left) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
}