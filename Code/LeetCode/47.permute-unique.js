/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = []
    let p = []
    nums.sort((a, b) => a - b)
    function helper(arr, visited, start, max, path) {
        if (start == max) {
            res.push([...path])
        }
        for (let i = 0; i < max; i++) {
            if (!visited[i]) {
                if (i > 0 && arr[i] === arr[i - 1] && !visited[i - 1]) {
                    continue
                }
                path.push(arr[i])
                visited[i] = true
                helper(arr, visited, start + 1, max, path)
                visited[i] = false
            }
        }
    }
    helper(nums, {}, 0, nums.length, p)
    return res
};

console.log(permuteUnique([1, 1, 2]))