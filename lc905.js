var sortArrayByParity = function(nums) {
    let even = nums.filter((x) => x%2 == 0)
    let odd = nums.filter((x) => x%2 == 1)
    return [...even,...odd]
};

