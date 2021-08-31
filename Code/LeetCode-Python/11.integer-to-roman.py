class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        mp = {
            'M': 1000,
            'CM': 900,
            'D': 500,
            'CD': 400,
            'C': 100,
            'XC': 90,
            'L': 50,
            'XL': 40,
            'X': 10,
            'V': 5,
            'IV': 4,
            'I': 1
        }
        roman = ''
        for key in mp:
            val = mp[key]
            while num >= val:
                roman = roman + key
                num = num - val
            if num == 0:
                break
        return roman


S = Solution()
print(S.intToRoman(4))