var arrangeCoins = function (n) {
    let res = 0;
    let temp = 1;
    while (n >= 0) {
        res += 1;
        n = n - temp;
        temp += 1
    }
    return res == 1? 1 : res - 1;
};