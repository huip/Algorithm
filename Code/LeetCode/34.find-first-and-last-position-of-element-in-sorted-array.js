/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    function searchFirst() {
        let left = 0
        let right = nums.length - 1
        while (left < right) {
            let mid = Math.floor((right + left) / 2)
            if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return nums[left] === target
            ? left
            : -1
    }

    function searchLast() {
        let left = 0
        let right = nums.length - 1
        while (left < right) {
            let mid = Math.floor((right + left + 1) / 2)
            if (nums[mid] <= target) {
                left = mid
            } else {
                right = mid - 1
            }
        }
        return nums[left] === target
            ? left
            : -1
    }

    if (!nums.length) {
        return [-1, -1]
    }

    return [searchFirst(), searchLast()]
    
};