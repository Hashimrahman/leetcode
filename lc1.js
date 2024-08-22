var twoSum = function(nums, target) {
    let res = [];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
             (nums[i] + nums[j] == target) ? res.push(i,j) : '';
        }
    }
    let unique_res = [...new Set(res)];
    return unique_res;
};

let target = 9;
let nums = [1,2,3,4,5];
let r = twoSum(nums, target);
console.log(r);
