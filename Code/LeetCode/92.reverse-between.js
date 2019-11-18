/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    if (head === null) {
        return head
    }
    let dummy = {}
    let pre
    dummy.next = head
    for (let i = 1; i < m; i++) {
        pre = dummy.next
    }
    head = pre.next
    for (let j = m; j < n; j++) {
        let next = head.next
        head.next = next.next
        next.next = pre.next
        pre.next = next
    }
    return dummy.next
}