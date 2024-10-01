var isPerfectSquare = function (num) {
    let i = 1;
    if (num == 1) return true
    while (i * i <= num) {
        if ((i * i) == num) {
            return true
        }
        else {
            i += 1;
        }
    }
    return false
};