/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    function clone(n, map = {}) {
        if (!n) {
            return n
        }
        let v = new Node(n.val, [])
        map[v.val] =  v
        for (let w of n.neighbors) {
            if (map[w.val]) {
                v.neighbors.push(map[w.val])
            } else {
                v.neighbors.push(clone(w, map))
            }
        }
        return v
    }

    return clone(node)
};