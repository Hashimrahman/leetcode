var arraySign = function(nums) {
    let product = nums.reduce((acc,curr) => acc = acc*curr)
    function signFunc(x) {
        if(x > 0){
            return 1
        }
        else if(x < 0){
            return -1
        }
        else{
            return 0
        }
    }
    return signFunc(product)
};