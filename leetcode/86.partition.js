/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) {
        return head
    }
    let before_head = {}
    let after_head = {}
    let before = before_head
    let after = after_head
    while(head) {
        if (head.val < x) {
            before.next = head
            before = head
        } else {
            after.next = head
            after = head
        }
        head = head.next
    }
    after.next = null
    before.next = after_head.next
    return before_head.next
};