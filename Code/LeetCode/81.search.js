/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    nums.sort((a, b) => a - b)
    let left = 0
    let right = nums.length
    while(left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] === target) {
            return true
        } else if (nums[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return false
};

console.log(search([2,5,6,0,0,1,2], 3))