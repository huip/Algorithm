class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        hash = {}
        for i, num in enumerate(nums):
            temp = target - num
            if temp in hash:
                return [hash[temp], i]
            hash[num] = i
        return None