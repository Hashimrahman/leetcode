def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:
        joined_list = nums1+nums2+nums3
        joined_set = set(joined_list)
        res = []
        for item in joined_set:
            if (item in nums1 and item in nums2) or (item in nums1 and item in nums3) or (item in nums2 and item in nums3):
                res.append(item)
        return res