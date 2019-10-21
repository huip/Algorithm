/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length < 2) {
        return true
    }
    let min = 1
    for (let i = nums.length - 2; i > 0; i--) {
        if (nums[i] < min) {
            min++
        } else {
            min = 1
        }
    }
    return nums[0] >= min
};