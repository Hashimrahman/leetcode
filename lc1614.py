class Solution(object):
    def maxDepth(self, s):
        """
        :type s: str
        :rtype: int
        """
        count = 0
        depth = []
        for char in s:
            if char == '(':
                depth.append(char)
            if len(depth) > count:
                count = len(depth)
            elif char ==')':
                depth.pop()
        return count