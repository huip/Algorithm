/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let hash = {}
    let len = nums.length
    for (let num of nums) {
        hash[num] = true
    }
    for (let i = 1; i <= len; i++) {
        if (!hash[i]) {
            return i
        }
    }
    return len + 1
};