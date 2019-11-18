/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let len = candidates.length
    let res = []
    if (len === 0) {
        return res
    }
    candidates.sort((a, b) => a - b)
    let p = []
    function dfs(arr, start, path, max, t) {
        if (t === 0) {
            res.push([...path])
        }
        for (let i = start; i < max; i++) {
            if (i > start && arr[i - 1] === arr[i]) {
                continue
            }
            let residue = t - arr[i]
            if (residue < 0) {
                break
            }
            path.push(arr[i])
            dfs(arr, i+1, path, max, residue)
            path.pop()
        }
    }
    dfs(candidates, 0, p, len, target)
    return res
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8))