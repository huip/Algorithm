/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let set = {}
    for (let i = 0; i < nums.length; i++) {
        if (set[nums[i]]) {
            set[nums[i]]++
        } else {
            set[nums[i]] = 1
        }
    }
    let arr = []
    for (let key in set) {
        arr[set[key]] = key
    }
    return arr.pop()
};