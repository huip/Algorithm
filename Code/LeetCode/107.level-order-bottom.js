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
var levelOrderBottom = function (root) {
    let res = []
    if (!root) {
        return res
    }
    let q = [root]
    while (q.length) {
        let tempQ = []
        let temp = []
        while (q.length) {
            let node = q.shift() || {}
            temp.push(node.val || '')
            if (node.left) {
                tempQ.push(node.left)
            }
            if (node.right) {
                tempQ.push(node.right)
            }
        }
        res.unshift(temp)
        q = tempQ
    }
    return res
};