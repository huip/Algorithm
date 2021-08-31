class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        y, res = abs(x), 0
        boundary = (1<<31) - 1 if x > 0 else 1 << 31
        while y != 0:
            res = res * 10 + y % 10
            if res > boundary:
                return 0
            y = y // 10
        return res if x > 0 else -res