/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let nums = []
    for (let i = 1; i <= n; i++) {
        nums.push(i + '')
    }
    let count = 0
    let result = []
    let path = []
    function helper(arr, start, max, visited, path) {
        if (start === max) {
            count++ 
            if (count === k) {
                result = [...path].join('')
            }
        }
        for (let i = 0; i < max; i++) {
            if (!visited[i]) {
                path.push(arr[i])
                visited[i] = true
                helper(arr, start + 1, max, visited, path)
                visited[i] = false
                path.pop()
            }
        }
    }
    helper(nums, 0, n, {}, path)
    return result
};

getPermutation(4, 9)