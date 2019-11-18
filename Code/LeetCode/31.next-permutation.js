/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let len = nums.length
    let i = len - 2

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }

    if (i >= 0) {
        let j = len - 1
        while (j >= 0 && nums[j] <= nums[i]) {
            j--
        }
        swap(i, j)
    }

    reverse(i + 1)

    function swap(i, j) {
        let temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
    }

    function reverse(start) {
        let i = start
        let j = nums.length - 1
        while (i < j) {
            swap(i, j)
            i++ 
            j--
        }
    }
};

nextPermutation([1, 2, 3, 1, 2])