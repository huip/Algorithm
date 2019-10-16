/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let res = []
    if (nums[0] > 0) {
        return []
    }
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
                left++ 
                right--
                while(nums[left] === nums[left - 1] && left < right) {
                    left++
                }
                while(nums[right] === nums[right + 1] && left < right) {
                    right--
                }
            }
            if (sum > 0) {
                right--
                while(nums[right] === nums[right + 1] && left < right) {
                    right--
                }
            }
            if (sum < 0) {
                left++
                while(nums[left] === nums[left - 1] && left < right) {
                    left++
                }
            }
        }
    }
    return res
};

console.log(threeSum([-2,0,1,1,2]))