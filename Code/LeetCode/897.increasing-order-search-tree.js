/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    if (!root) {
        return root
    }
    let vals = []
    function inOrder(node) {
        if (!node) {
            return
        }
        inOrder(node.left)
        vals.push(node.val)
        inOrder(node.right)
    }
    inOrder(root)
    let tree = {}
    let curr = tree
    for (let val of vals) {
        curr.right = {
            val: val,
            left: null
        } 
        curr = curr.right
    }
    return tree.right
};