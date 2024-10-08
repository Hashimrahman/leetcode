var findErrorNums = function (nums) {
    let len = nums.length;
    let unique = [...new Set(nums)]
    let sum = nums.reduce((acc, curr) => acc += curr, 0);
    let uniqueSum = unique.reduce((acc, curr) => acc += curr, 0);
    let actualSum = (len * (len + 1)) / 2;
    return [sum - uniqueSum, actualSum - uniqueSum]
};