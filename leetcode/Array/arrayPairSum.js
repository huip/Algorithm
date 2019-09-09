/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((a, b) => {
        return a - b
    })
    let sum = 0
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i]
    }
    return sum
};

console.log(arrayPairSum([6214, -2290, 2833, -7908]))