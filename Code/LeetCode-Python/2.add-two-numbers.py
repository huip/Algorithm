# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        l3 = ListNode(0)
        carry = 0
        curr = l3
        while l1 or l2 or carry != 0:
            cur1_val = l1.val if l1 else 0
            cur2_val = l2.val if l2 else 0
            sum = cur1_val + cur2_val + carry
            carry = sum // 10
            curr.next = ListNode(sum % 10)
            curr = curr.next
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
        return l3.next