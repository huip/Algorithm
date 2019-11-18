/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (k === 0) {
        return nums
    }
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
    return nums
};

rotate([-1,-100,3,99], 2)