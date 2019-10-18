/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let len = candidates.length
    if (len === 0) {
        return []
    }
    candidates.sort((a, b) => a - b)
    let res = []
    let path = []
    function dfs(arr, start, max, p, t) {
        if (t === 0) {
            res.push([
                ...p
            ])
        }
        for (let i = start; i < max; i++) {
            let residue = t - arr[i]
            if (residue < 0) {
                break
            }
            p.push(arr[i])
            dfs(arr, i, max, p, residue)
            p.pop()
        }
    }
    dfs(candidates, 0, len, path, target)
    return res
};

combinationSum([2,3,6,7], 7)