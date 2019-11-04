/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = -Infinity
    let imin = 1
    let imax = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = imax
            imax = imin
            imin = temp
        }
        imax = Math.max(nums[i] * imax, nums[i])
        imin = Math.min(nums[i] * imin, nums[i])
        max = Math.max(max, imax)
    }
    return max
};

maxProduct([2,3,-2,4,-3])