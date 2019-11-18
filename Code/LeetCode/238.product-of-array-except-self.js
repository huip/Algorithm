/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = []
    let k = 1
    for (let i = 0; i <= nums.length; i++) {
        res[i] = k
        k *= nums[i]
    }
    k = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= k
        k *= nums[i]
    }
    res.pop()
    return res
};