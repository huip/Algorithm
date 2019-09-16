/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) {
        return null
    }
    let curr = head
    let tempNode = {
        val: curr.val,
        next: null
    }
    while (curr.next) {
        curr = curr.next
        tempNode = {
            val: curr.val,
            next: tempNode
        }
    }
    return tempNode
};