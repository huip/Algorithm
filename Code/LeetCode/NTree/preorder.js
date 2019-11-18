/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    let res = []
    function pre(node) {
        if (node === null) {
            return null
        }
        res.push(node.val)
        for (let i = 0; i < node.children.length; i++) {
            pre(node.children[i])
        }
    }
    pre(root)
    return res
};