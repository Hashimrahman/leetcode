class Solution(object):
    def mostWordsFound(self, sentences):
        """
        :type sentences: List[str]
        :rtype: int
        """
        max = 0
        for item in sentences:
            temp = len(item.split())
            if(temp > max):
                max = temp
        return max