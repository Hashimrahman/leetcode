var removeTrailingZeros = function (num) {
    let str = num.toString().split('');
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] != '0') {
            str = str.slice(0, i + 1);
            break;
        }
    }
    return str.join('')
};