/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return []
    }
    let res = []
    let q = [root]
    while (q.length) {
        let tempQ = []
        let temp = []
        while(q.length) {
            let curr = q.shift()
            temp.push(curr.val)
            for (let i = 0; i < curr.children.length; i++) {
                tempQ.push(curr.children[i])
            }
        }
        res.push(temp)
        q = tempQ
    }
    return res
};