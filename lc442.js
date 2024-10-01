var findDuplicates = function(nums) {
    nums.sort((a,b)=> a-b);
    let duplicates = [];
    for(let i = 0;i < nums.length;i++){
        if(nums[i] == nums[i+1]){
            duplicates.push(nums[i]);
        }
    }
    const res = [...new Set(duplicates)]
    return res;
};