var findIntersectionValues = function (nums1, nums2) {
    let answer1 = [];
    let answer2 = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            answer1.push(nums1[i])
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        if (nums1.includes(nums2[j])) {
            answer2.push(nums2[j])
        }
    }
    return [answer1.length, answer2.length];
};