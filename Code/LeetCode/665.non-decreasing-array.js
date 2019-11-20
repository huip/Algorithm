/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let count = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] <= nums[i]) {
            continue
        }
        count++
        if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
            nums[i] = nums[i - 1]
        } else {
            nums[i - 1] = nums[i]
        }
    }
    return (count - 1) <= 0
};

checkPossibility([3,4,2,3])