var findFinalValue = function(nums, original) {
    let flag = true
    while(flag){
        let temp = nums.indexOf(original)
        if(temp == -1){
            flag = false
        }
        else{
            original = original * 2
        }
    }
    return original
};