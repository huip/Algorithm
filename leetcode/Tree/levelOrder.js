/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return []
    }

    let q = [root]
    let result = []

    while (q.length) {
        let temp = []
        let tempQ = []
        while (q.length) {
            let curr = q.shift()
            temp.push(curr.val)
            if (curr.left) {
                tempQ.push(curr.left)
            }
            if (curr.right) {
                tempQ.push(curr.right)
            }
        }
        result.push(temp)
        q = tempQ
    }
}