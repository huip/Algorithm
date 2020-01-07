function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    function helper(index, start, end) {
        if (start > end) {
            return null
        }
        let pivot = postorder[index]
        let root = new TreeNode(pivot)
        let tempIndex = inorder.indexOf(pivot)
        root.left = helper(index - (end - tempIndex + 1), start, tempIndex - 1)
        root.right = helper(index - 1, tempIndex + 1, end)
        return root
    }
    if (inorder.length == 0 || postorder.length == 0) {
        return null
    }
    return helper(postorder.length - 1, 0, inorder.length - 1)
};