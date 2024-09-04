var repeatedCharacter = function (s) {
    let res = null;
    let temp = [];
    for (let i = 0; i < s.length; i++) {
        if (temp.includes(s[i])) {
            res = s[i];
            break;
        }
        else {
            temp.push(s[i])
        }
    }
    return res;
};