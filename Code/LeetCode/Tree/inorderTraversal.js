/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = []
    function inOrder(node) {
        if (node != null) {
            inOrder(node.left)
            res.push(node.val)
            inOrder(node.right)
        }
    }
    inOrder(root)
    return res
};