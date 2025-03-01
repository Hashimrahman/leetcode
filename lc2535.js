var differenceOfSum = function(nums) {
    let elementSum = nums.reduce((acc, elem) => acc+=elem, 0)
    let digitSum = 0
    for (let item of nums){
        let singleElement = item.toString().split("").map(x => Number(x)).reduce((acc, elem)=> acc+=elem,0)
        digitSum += singleElement
    }
    return Math.abs(elementSum - digitSum)
};