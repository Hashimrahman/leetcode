var findNonMinOrMax = function(nums) {
    let sorted = nums.sort((a,b) => a-b);
    let unique = [...new Set(sorted)]
    if(unique.length > 2){
        return unique[1]
    }
    return -1;
};