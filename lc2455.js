var averageValue = function(nums) {
    let filtered = nums.filter((item) => item % 3 ==0 && item % 2 == 0)
    let res = (Math.floor(filtered.reduce((acc,curr) => acc+=curr,0)/filtered.length))
    return filtered.length ==0 ? 0 : res
};