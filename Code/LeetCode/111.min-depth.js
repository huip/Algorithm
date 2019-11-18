/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    let depth = 0
    if (root === null) {
        return depth
    }
    let q = [root]
    while (q.length) {
        let tempQ = []
        depth++ 
        while (q.length) {
            node = q.shift()
            if (node.left === null && node.right === null) {
                return depth
            }
            if (node.left) {
                tempQ.push(node.left)
            }
            if (node.right) {
                tempQ.push(node.right)
            }
        }
        q = tempQ
    }
    return depth
};