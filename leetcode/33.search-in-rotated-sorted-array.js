/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let len = nums.length
    if (!len) {
        return -1
    }
    let left = 0
    let right = len - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] == target) {
            return mid
        }
        // 前半部分有序
        if (nums[mid] >= nums[left]) {
            // 答案在前半部分
            if (nums[mid] >= target && nums[left] <= target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            // 答案在后半部分
            if (target <= nums[right] && target >= nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};

console.log(search([4,5,6,7,0,1,2], 0))