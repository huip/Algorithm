/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let start = 0
    let end = nums.length - 1
    while(start < end) {
        let mid = start + Math.floor((end - start) / 2)
        if (mid % 2 === 1) {
            mid-- // 保证mid为偶数
        }
        // 如果mid位等于mid+1位证明 单一元素在后半段
        if (nums[mid] === nums[mid+1]) {
            start = mid + 2
        } else {
            end = mid
        }
    }
    return nums[start]
};

singleNonDuplicate([3,3,7,7,10,11,11])