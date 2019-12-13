/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (head == null || head.next == null) {
        return
    }
    let stack = []
    let p = head
    while (p) {
        stack.push(p)
        p = p.next
    }
    let len = stack.length
    let middle = Math.floor((len - 1) / 2)
    p = head
    while (middle != 0) {
        let temp = stack.pop()
        temp.next = p.next
        p.next = temp
        p = temp.next
        middle--
    }
    stack
        .pop()
        .next = null
};