class Solution(object):
    def removeDuplicates(self, s):
        """
        :type s: str
        :rtype: str
        """
        stack = []
        for char in s:
            if len(stack) == 0 or char != stack[-1]:
                stack.append(char)
            else:
                stack.pop()
        return "".join(stack) 
        