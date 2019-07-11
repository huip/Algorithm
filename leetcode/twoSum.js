/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let start = 0;
    let end = 0;
    for (let i = 0; i < nums.length; i++) {
        let subNumber = target - nums[i]
        let _end = nums.lastIndexOf(subNumber)
        if (_end > -1 && _end != i) {
            start = i;
            end = _end
            break
        }
    }
    return [start, end]
};

console.log(twoSum([
    -1, -2, -3, -4, -5
], -8))