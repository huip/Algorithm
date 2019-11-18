/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let header = {
        val: '',
        next: head
    }
    let curr = header
    while (curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return header.next
}