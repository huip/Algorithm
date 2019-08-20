/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let numberCount = {}
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        numberCount[nums[i]] = numberCount[nums[i]] ? ++numberCount[nums[i]] : 1
        if (numberCount[nums[i]] <= 2) {
            nums[j++] = nums[i]
        }
    }
    return j
}

let arr = [0,0,1,1,1,1,2,3,3]

console.log(removeDuplicates(arr), arr)