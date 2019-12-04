/**
 * 递归暴力破解法
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays1 = function (nums, S) {
    let count = 0
    function calculator(level, sum) {
        if (level === nums.length) {
            if (sum === S) {
                count++
            }
        } else {
            calculator(level + 1, sum + nums[level])
            calculator(level + 1, sum - nums[level])
        }
    }
    calculator(0, 0)
    return count
};

var findTargetSumWays = function (nums, S) {
    let count = 0
    function calculator(level, sum) {
        if (level === nums.length) {
            if (sum === S) {
                count++
            }
        } else {
            calculator(level + 1, sum + nums[level])
            calculator(level + 1, sum - nums[level])
        }
    }
    calculator(0, 0)
    return count
};
findTargetSumWays([1, 1, 1, 1, 1], 3)