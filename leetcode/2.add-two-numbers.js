/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l3 = {}
    let curr = l3
    let carry = 0
    while (l1 || l2 || carry != 0) {
        let curr1Val = l1
            ? l1.val
            : 0
        let curr2Val = l2
            ? l2.val
            : 0
        let sum = curr1Val + curr2Val + carry
        carry = Math.floor(sum / 10)
        let sumNode = {
            val: sum % 10
        }
        curr.next = sumNode
        curr = sumNode
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
    return l3.next
};
