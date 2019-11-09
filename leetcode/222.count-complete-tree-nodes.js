/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (root === null) {
        return 0
    }
    let q = [root]
    let nums = []
    while(q.length) {
        let tempQ = []
        while(q.length) {
            let node = q.pop()
            nums.push(node.val)
            if (node.left) {
                tempQ.push(node.left)
            }
            if (node.right) {
                tempQ.push(node.right)
            }
        }
        q = tempQ
    }
    return nums.length
};