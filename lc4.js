var findMedianSortedArrays = function (nums1, nums2) {

    let finalArray = [...nums1, ...nums2].sort((a, b) => a - b);
    let ln = finalArray.length
    let median = 0;
    if (ln % 2 == 0) {
        median = (finalArray[(ln / 2) -1] + finalArray[(ln / 2)]) / 2
    }
    else if (ln % 2 == 1) {
        median = finalArray[((ln + 1) / 2) - 1]
    }
    return median;
};