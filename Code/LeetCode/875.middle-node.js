/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let len = 0
    let p = head
    while (p) {
        len += 1
        p = p.next
    }
    let middle = Math.floor(len / 2)
    p = head
    while (middle > 0) {
        middle--
        p = p.next
    }
    return p
};