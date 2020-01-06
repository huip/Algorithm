function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    function bdt(index, start, end) {
        if (start > end) {
            return null
        }
        let pivot = preorder[index]
        let root = new TreeNode(pivot)
        let tempIndex = inorder.indexOf(pivot)
        root.left = bdt(index + 1, start, tempIndex - 1)
        root.right = bdt(index + tempIndex - start + 1, tempIndex + 1, end)
        return root
    }
    return bdt(0, 0, inorder.length - 1)
};
console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))