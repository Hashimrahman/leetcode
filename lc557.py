def reverseWords(self, s: str) -> str:
        arr = s.split(' ')
        for i in range(len(arr)):
            new_word = arr[i][::-1]
            arr[i] = new_word
        res = ' '.join(arr)
        return res