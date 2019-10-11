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
var postorder = function (root) {
    let res = []
    function post(node) {
        if (node === null) {
            return null
        }
        for (let i = 0; i < node.children.length; i++) {
            post(node.children[i])
        }
        res.push(node.val)
    }
    post(root)
    return res
};