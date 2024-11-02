def findFinalValue(self, nums: List[int], original: int) -> int:
        countOfNum = nums.count(original)
        while(countOfNum != 0):
            original*=2
            countOfNum = nums.count(original)
        return original