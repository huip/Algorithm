/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let level = 0
    let res = []
    if (root === null) {
        return res
    }
    let q = [root]
    while (q.length) {
        let tempQ = []
        let temp = []
        while (q.length) {
            let current = q.pop()
            if (current) {
                temp.push(current.val)
                if (level % 2 === 0) {
                    if (current.left) {
                        tempQ.push(current.left)
                    }
                    if (current.right) {
                        tempQ.push(current.right)
                    }
                } else {
                    if (current.right) {
                        tempQ.push(current.right)
                    }
                    if (current.left) {
                        tempQ.push(current.left)
                    }
                }
            }
        }
        level++ 
        q = tempQ
        res.push(temp)
    }
    return res
};