/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (!nums.length) {
        return 0
    }
    let dp = [1]
    let max = 1
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i] || 1, (dp[j] || 1) + 1)
                max = Math.max(max, dp[i])
            }
        }
    }
    return max
};

lengthOfLIS([1,3,6,7,9,4,10,5,6])