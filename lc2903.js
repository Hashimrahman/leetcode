var findIndices = function (nums, indexDifference, valueDifference) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference) {
                res.push(i, j)
                break;
            }
        }
    }
    return res.length > 0 ? res : [-1,-1]
};