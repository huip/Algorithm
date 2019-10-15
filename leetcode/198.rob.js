/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 0) {
        return 0
    }
    let odd = 0
    let even = 0
    for (let i = 0; i < nums.length; i++) {
        if ((i + 1) % 2 == 0) {
            even += nums[i]
            even = Math.max(even, odd)
        } else {
            odd += nums[i]
            odd = Math.max(odd, even)
        }
    }
    return Math.max(odd, even)
};