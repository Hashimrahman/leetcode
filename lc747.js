var dominantIndex = function(nums) {
    let sorted = nums.slice().sort((a, b) => a - b);
    let largest = sorted[sorted.length -1]
    let flag = false;
    for(let i = 0; i< nums.length-1;i++){
        if(sorted[i] * 2 <= largest){
            flag = true
        }
        else{
            flag = false;
            break;
        }
    }
    if(flag == true){
        return nums.indexOf(largest)
    }
    else{
        return -1
    }
};