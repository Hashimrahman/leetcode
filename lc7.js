var reverse = function (x) {
    let reversed = parseInt(x.toString().split('').reverse().join(''));
    if (reversed <= ((-2) ** 31) || reversed >= ((2 ** 31) - 1)) {
        return 0;
    }
    else {
        if (x > 0) {
            return reversed;
        }
        else {
            return -reversed;
        }
    }
};