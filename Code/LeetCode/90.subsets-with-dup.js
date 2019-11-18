/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = []
    let p = []
    nums.sort((a, b) => a - b)
    function helper(start, path) {
        res.push([...path])
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue
            }
            path.push(nums[i])
            helper(i + 1, path)
            path.pop()
        }
    }
    helper(0, p)
    return res
};