class Solution(object):
    def findValidPair(self, s):
        """
        :type s: str
        :rtype: str
        """
        ls = list(str(s))
        res = ""
        print(ls)
        for i in range(len(ls)-1):
            j = i + 1
            if int(ls[j]) != int(ls[i]) and ls.count(ls[i]) == int(ls[i]) and ls.count(ls[j]) == int(ls[j]):
                res = ls[i]+ls[j]
                break
        return res
