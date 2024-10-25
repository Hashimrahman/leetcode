var findGCD = function (nums) {
    const largest = Math.max(...nums)
    const smallest = Math.min(...nums)
    res = 1
    if (largest % smallest === 0) return smallest
    for (let i = 1; i <= smallest / 2; i++) {
        if (smallest % i === 0 && largest % i === 0) {
            res = i
        }
    }
    return res
};