class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
       
        if s is None and len(s) > 0:
            return ''
        left = 0
        right = 0
        max_start = 0
        max_len = 0
        length = 1
        for i in range(len(s)):
            left = i - 1
            right = i + 1
            while(left >=0 and s[i] == s[left]):
                left = left - 1
                length = length + 1
            while(right < len(s) and s[i] == s[right]):
                right = right + 1
                length = length +1

            while(left >= 0 and right < len(s) and s[left] == s[right]):
                left = left - 1
                right = right + 1
                length = length + 2
            if length > max_len:
                max_len = length
                max_start = left
            length = 1
        return s[max_start+1:max_start + max_len + 1]