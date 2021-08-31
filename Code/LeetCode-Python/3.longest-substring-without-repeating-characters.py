class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        left = 0
        res = 0
        h = {}
        for i in range(len(s)):
            if s[i] in h:
                left = max(left, h[s[i]] + 1) # 移动左侧指针
            res = max(res, i - left + 1)
            h[s[i]] = i
        return res