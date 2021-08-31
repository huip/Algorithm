class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        ### 暴力破解法
        # res = 0
        # for i in range(len(height)):
        #     for j in range(len(height)):
        #         res = max(min(height[i], height[j]) * (j - i), res)
        # return res
        i, j, res = 0, len(height) - 1, 0
        while i < j:
            if height[i] > height[j]:
                res = max(height[j] * (j - i), res)
                j = j - 1
            else:
                res = max(height[i] * (j - i), res)
                i = i + 1
        return res

S = Solution()
print(S.maxArea([1,8,6,2,5,4,8,3,7]))