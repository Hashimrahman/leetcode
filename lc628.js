var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    const lastProduct = nums[len - 1] * nums[len - 2] * nums[len - 3];
    const firstProduct = nums[0] * nums[1] * nums[len-1];
    return Math.max(lastProduct, firstProduct)
};