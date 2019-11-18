/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = []
    function helper(arr, len, currLen, visited, path) {
        if (currLen == len) {
            res.push([...path])
        }
        for (let i = 0; i < len; i++) {
            if (!visited[i]) {
                path.push(nums[i])
                visited[i] = true
                helper(arr, len, currLen+1, visited, path)
                path.pop()
                visited[i] = false
            }
        }
    }
    helper(nums, nums.length, 0, {}, [])
    return res
};

permute([1, 2, 3])