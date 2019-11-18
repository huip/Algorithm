/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = []
    let p = []
    function helper(start, path) {
        res.push([...path])
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i])
            helper(i + 1, path)
            path.pop()
        }
    }
    helper(0, p)
    return res
};

subsets([1, 2, 3])