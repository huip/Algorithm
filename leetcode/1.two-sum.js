/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let cache = {}
    for (let i = 0; i < nums.length; i++) {
        let num = cache[target - nums[i]]
        if (num >= 0) {
            if (num > i) {
                return [i, num]
            } else {
                return [num, i]
            }
        }
        cache[nums[i]] = i
    }
    return []
};