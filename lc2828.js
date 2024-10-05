var isAcronym = function (words, s) {
    let temp = '';
    for (let i = 0; i < words.length; i++) {
        temp += words[i][0]
    }
    return temp == s ? true : false;
};