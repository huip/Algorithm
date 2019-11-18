/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let map = {}
    let res = []
    let len = nums.length
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len - 3; i++) {
        for (let j = i + 1; j < len - 2; j++) {
            let left = j + 1
            let right = len - 1
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum > target) {
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    map[`${nums[i]},${nums[j]},${nums[left]},${nums[right]}`] = true
                    left++ 
                    right--
                }
            }
        }
    }
    for (let key in map) {
        res.push(key.split(',').map((num) => parseInt(num)))
    }
    return res
};

console.log(fourSum([1,0,-1,0,-2,2], 0))