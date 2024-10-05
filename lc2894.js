var differenceOfSums = function (n, m) {
    let num1 = 0;
    let num2 = 0;
    for (let i = 1; i <= n; i++) {
        if (i % m != 0) {
            num1 += i
        }
    }
    for (let i = 1; i <= n; i++) {
        if (i % m == 0) {
            num2 += i
        }
    }
    console.log(num1,num2)
    return num1 - num2
};