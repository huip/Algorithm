/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let start = 0
    let sum = 0
    let result = Infinity
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        while (sum >= s) {
            result = Math.min(result, i + 1 - start)
            sum -= nums[start++]
        }
    }

    return (result != Infinity) ? result : 0
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))