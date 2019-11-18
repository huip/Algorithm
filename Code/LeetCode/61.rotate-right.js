/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null) {
        return head
    }
    let tail = head
    let length = 1
    while (tail.next) {
        tail = tail.next
        length++
    }
    k = k / length
    if (k === 0) {
        return head
    }
    tail.next = head
    let target = head
    let diff = length - k - 1
    while (diff) {
        target = target.next
        diff--
    }
    let result = target.next
    target.next = null
    return result
};