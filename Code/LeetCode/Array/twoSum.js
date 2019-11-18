/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // 二分搜索法
// var twoSum = function (nums, target) {
//     let start = 0;
//     let end = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let subNumber = target - nums[i]
//         let _end = nums.lastIndexOf(subNumber)
//         if (_end > -1 && _end != i) {
//             start = i;
//             end = _end
//             break
//         }
//     }
//     return [start, end]
// };


// 对撞指针法 有序数组
var twoSum = function (nums, target) {
    let len = nums.length
    let i = 0
    let j = len - 1
    if (len < 2) {
        return []
    }
    while (i < j) {
        if (nums[i] + nums[j] === target) {
            return [i+1, j+1]
        } else if (nums[i] + nums[j] > target) {
            j--
        } else {
            i++
        }
    }
    return []
}

console.log(twoSum([2, 7, 11, 15], 9))