/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    let res = []
    if (!root) {
        return res
    }
    let q = [root]
    while(q.length) {
        let tempQ = []
        let max = -Infinity
        while(q.length) {
            let current = q.pop()
            max = Math.max(current.val, max)
            if (current.left) {
                tempQ.push(current.left)
            }
            if (current.right) {
                tempQ.push(current.right)
            }
        }
        res.push(max)
        q = tempQ
    }
    return res
};