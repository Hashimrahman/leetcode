def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        temp1 = ''.join(word1)
        temp2 = ''.join(word2)
        if (temp1==temp2):
            return True
        else:
            return False