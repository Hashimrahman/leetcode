var sumOfTheDigitsOfHarshadNumber = function (x) {
    let sum = x.toString().split("").map((x) => parseInt(x)).reduce((acc, curr) => acc += curr, 0);;
    return x % sum == 0 ? sum : -1;
};