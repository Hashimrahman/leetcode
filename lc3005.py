def maxFrequencyElements(self, nums: List[int]) -> int:
        res = 0
        count = 0
        unique = set(nums)
        for item in unique:
            numcount = nums.count(item)
            if numcount > count:
                count = numcount
                res = count
            elif numcount == count:
                res = res+numcount
        return res