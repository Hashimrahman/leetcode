var findDifference = function (nums1, nums2) {
    let ans1 = []
    let ans2 = []
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i]) && !ans1.includes(nums1[i])) {
            ans1.push(nums1[i])
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i]) && !ans2.includes(nums2[i])) {
            ans2.push(nums2[i])
        }
    }
    return [ans1, ans2]
};