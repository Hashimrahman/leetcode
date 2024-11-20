def checkIfPangram(self, sentence: str) -> bool:
        unique_charecter = set(list(sentence))
        if len(unique_charecter) == 26:
            return True
        return False