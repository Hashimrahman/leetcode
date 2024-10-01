var missingNumber = function (nums) {
    let sum = nums.reduce((acc, curr) => acc += curr, 0);
    let n = nums.length;
    let actualSum = (n * (n + 1)) / 2;
    return actualSum - sum;
};