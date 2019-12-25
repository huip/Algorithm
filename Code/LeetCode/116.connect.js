/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) {
        return null
    }
    let q = [root]
    while (q.length) {
        let tempQ = []
        for (let i = 0; i < q.length; i++) {
            let current = q[i]
            current.next = i === 0
                ? null
                : q[i - 1]
            if (current.left) {
                tempQ.push(current.left)
            }
            if (current.right) {
                tempQ.push(current.right)
            }
        }
        q = tempQ
    }
    return root
};