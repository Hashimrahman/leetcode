var alternateDigitSum = function (n) {
    let splitted = n.toString().split("").map((x) => Number(x))
    let signed = splitted.map((x, index) => (index % 2 == 0 ? x : x * -1))
    let sum = signed.reduce((acc, elem) => acc+=elem,0)
    return sum
};