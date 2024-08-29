var reduce = function (nums, fn, init) {
    if (nums.length == 0) {
        return init;
    }
    else {
        let length = nums.length;
        let value = init;
        for (let i = 0; i < length; i++) {
            value = fn(value, nums[i]);
        }
        return value;
    }
};