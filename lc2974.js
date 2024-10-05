var numberGame = function (nums) {
    let temp = [];
    let sorted = nums.sort((a, b) => a - b);
    let arr = [];
    for (let i = 0; i < sorted.length; i++) {
        temp.push(sorted[i]);
        if (temp.length == 2) {
            let temp1 = temp.reverse();
            arr.push(...temp1);
            temp = [];
        }
        if (i == sorted.length - 1 && temp.length != 0) {
            arr.push(...temp1);
        }
    }
    return arr;
};