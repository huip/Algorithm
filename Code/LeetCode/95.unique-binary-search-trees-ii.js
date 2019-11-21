/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n < 1) {
        return []
    }
    function paitition(start, end) {
        let res = []
        if (start > end) {
            res.push(null)
            return res
        }
        for (let i = start; i <= end; ++i) {
            let leftSubTrees = paitition(start, i - 1)
            let rightSubTrees = paitition(i + 1, end)
            for (let left of leftSubTrees) {
                for (let right of rightSubTrees) {
                    let root = {
                        val: i,
                        left,
                        right
                    }
                    res.push(root)
                }
            }
        }
        return res
    }
    return paitition(1, n)
};

console.log(generateTrees(10))