class Solution:
    def maximumSwap(self, num: int) -> int:
        digits = list(str(num))
        for i in range(len(digits)):
            rest_max = max(digits[i:])
            if rest_max > digits[i]:
                print(i, digits[i],rest_max)
                max_index = len(digits) - 1 - digits[::-1].index(rest_max)
                digits[i],digits[max_index] = digits[max_index],digits[i]
                return int(''.join(digits))
        return num