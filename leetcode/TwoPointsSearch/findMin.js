/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length < 2) {
        return nums[0]
    }
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] > (nums[mid - 1] || 0) && nums[mid] > nums[mid + 1]) {
            return nums[mid + 1]
        } else if (nums[mid] >= nums[mid - 1]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return nums[0]
};

findMin([4,5,1,2,3])