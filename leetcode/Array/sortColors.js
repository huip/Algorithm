/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let colorMap = {
        '0': 0,
        '1': 0,
        '2': 0
    }
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        colorMap[num]++
    }
    let k = 0
    for (let key in colorMap) {
        for (let j = 0; j < colorMap[key]; j++) {
            nums[k] = +key
            k++
        }
    }
}

let arr = [2,0,2,1,1,0]
console.log(sortColors(arr))