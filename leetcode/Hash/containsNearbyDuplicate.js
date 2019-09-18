/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (hash[num] && (i + 1 - hash[num]) <= k) {
            return true
        }
        hash[num] = i + 1
    }
    return false
};