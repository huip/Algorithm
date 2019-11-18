/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => {
        return a - b
    })
    let ans = Infinity
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1
        let end = nums.length - 1
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end]
            // this situation sum more closest to target then update ans
            if (Math.abs(target - sum) < Math.abs(target - ans)) {
                ans = sum
            }
            if (sum > target) {
                end--
            } else if (sum < target) {
                start++
            } else {
                return ans
            }
        }
    }
    return ans
};
