/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let curr = head
    let len = 0
    while (curr) {
        curr = curr.next
        len++
    }
    curr = head
    if (len - n <= 0) {
        return curr
            ? curr.next
            : null
    }
    for (let i = 0; i < len - n - 1; i++) {
        curr = curr.next
    }
    curr.next = curr.next
        ? curr.next.next
        : null
    return head
}