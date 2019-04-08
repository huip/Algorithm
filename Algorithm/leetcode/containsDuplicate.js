/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let contains = {}
    for (let i = 0; i < nums.length; i++) {
        if (contains[nums[i]]) {
            return true
        } else {
            contains[nums[i]] = true
        }
    }
    return false
};

console.log(containsDuplicate([1,2,3,1]))