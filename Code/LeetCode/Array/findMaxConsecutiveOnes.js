/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let tempArr = []
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == '1') {
            tempArr.push(i)
        } else {
            max = tempArr.length > max ? tempArr.length : max
            tempArr = []
        }
    }
    return tempArr.length > max ? tempArr.length : max
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))