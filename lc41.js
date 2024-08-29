var firstMissingPositive = function (nums) {
    let smallest = 0;
    let sorted = nums.filter((x) => x > 0).sort((a, b) => a - b);
    sorted = [...new Set(sorted)];
    let min = Math.min(...sorted);
    if (min != 1) {
        return 1;
    }
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i + 1] - sorted[i] != 1) {
            return sorted[i] + 1;
            break;
        }
    }
    if (smallest != 0) {
        return sorted[sorted.length - 1] + 1;
    }
};