class Solution(object):
    def sortSentence(self, s):
        """
        :type s: str
        :rtype: str
        """
        words = s.split()
        n = len(words)
        for i in range(n):
            min_index = i
            for j in range(i+1,n):
                if(words[j][-1] < words[min_index][-1]):
                    min_index = j
            words[min_index],words[i] = words[i],words[min_index]
        words[:] = [word[:-1] for word in words]
        res = ' '.join(words)
        return res