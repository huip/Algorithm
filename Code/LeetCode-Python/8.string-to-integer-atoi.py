class Solution(object):
    def myAtoi(self, s):
        """
        :type s: str
        :rtype: int
        """
        str_length = len(s)
        if str_length == 0:
            return 0
        flag = 1
        i = 0
        res = 0
        while i < str_length and s[i] == ' ': # 循环要注意退出条件
            i = i + 1
        if (i == str_length) or (s[i] > '9' and s[i] < '0' and s[i] != '-' and s[i] != '+'):
            return 0
        if s[i] == '-' or s[i] == '+':
            if s[i] == '-':
                flag = -1
            i = i + 1

        while (i < str_length) and (s[i] <= '9' and s[i] >= '0'):
            res = res * 10 + int(s[i])
            i = i + 1
        boundary = (1<<31) - 1 if flag > 0 else 1 << 31
        if res > boundary:
            res = boundary
        return flag * res

S = Solution()

print(S.myAtoi(' '))