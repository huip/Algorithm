/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    let res = null
    let p = head
    while(p) {
        let next = p.next
        res = insert(res, p)
        p = next
    }
    function insert(h, node) {
        if (h == null || h.val > node.val) {
            node.next = h
            return node
        }
        h.next = insert(h.next, node)
        return h
    }
    return res
};