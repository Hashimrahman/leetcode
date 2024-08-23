var searchInsert = function (nums, target) {
    let index = nums.indexOf(target);
    
    if (index == -1) {
        let diff = Math.abs(nums[0] - target);
        let currentDiff = 0;
        let closest = nums[0];
        for (let i = 0; i < nums.length; i++) {
            currentDiff = target - nums[i];
            let temp = Math.abs(currentDiff)
            if (temp <= diff) {
                closest = nums[i];
                if (target > nums[i]) {
                    index = nums.indexOf(closest) + 1; 
                }
                else {
                    index = nums.indexOf(closest);
                }
                diff = Math.abs(nums[i] - target);
            }
        }
        return index;
    }
    else if (index != -1) {
        return index;
    }
};