/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            delete hash[nums[i]]
        } else {
            hash[nums[i]] = true
        }
    }
    return Object.keys(hash).map((num) => +num)
};

singleNumber([1,2,1,3,2,5])