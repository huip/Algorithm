/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxIndex = 0
    let maxNum = nums[0]
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > maxNum) {
            maxNum = nums[j]
            maxIndex = j
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] * 2 > maxNum && maxIndex != i) {
            return -1
        }
    }
    return maxIndex
};
console.log(dominantIndex([3, 6, 1, 0]))