/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 0) {
        return 0
    }
    if (nums.length == 1) {
        return nums[0]
    }
    function helper(arr) {
        if (arr.length == 0) {
            return 0
        }
        let odd = 0
        let even = 0
        for (let i = 0; i < arr.length; i++) {
            if ((i + 1) % 2 == 0) {
                even += arr[i]
                even = Math.max(even, odd)
            } else {
                odd += arr[i]
                odd = Math.max(odd, even)
            }
        }
        return Math.max(odd, even)
    }
    return Math.max(helper(nums.slice(1, nums.length)), helper(nums.slice(0, nums.length - 1)))
};
