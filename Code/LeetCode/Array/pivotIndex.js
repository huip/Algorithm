/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }
    let sum = 0
    for (let j = 0; j < nums.length; j++) {
        if (sum == (total - sum - nums[j])) {
            return j
        }
        sum += nums[j]
    }
    return -1
};

console.log(pivotIndex([1, 2, 3]))