/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (root == null) {
        return null
    }

    if (root.val > key) {
        root.left = deleteNode(root.left, key)
        return root
    }

    if (root.val < key) {
        root.right = deleteNode(root.right, key)
        return root
    }

    if (root.left == null) {
        return root.right
    }

    if (root.right == null) {
        return root.left
    }
    let smallestNode = root.right
    while (smallestNode.left) {
        smallestNode = smallestNode.left
    }
    smallestNode.left = root.left
    return root.right
};