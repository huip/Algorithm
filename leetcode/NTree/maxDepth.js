/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    let count = 0
    if (root === null) {
        return count
    }
    let q = [root]
    while(q.length) {
        let tempQ = []
        while(q.length) {
            let curr = q.shift()
            for (let i = 0; i < curr.children.length; i++) {
                tempQ.push(curr.children[i])
            }
        }
        count++
        q = tempQ
    }
    return count
};