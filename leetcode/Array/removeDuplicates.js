/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[j]) {
            nums[++j] = nums[i]
        }
    }
    return j+1
}

let arr = [3,2,2,3]
let count = removeDuplicates(arr)

console.log(count, arr)