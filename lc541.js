var reverseStr = function (s, k) {
    let newArr = [];
    let temp = '';
    for (let i = 0; i < s.length; i++) {
        temp += s[i];
        if (temp.length == k || i == s.length - 1) {
            newArr.push(temp);
            temp = '';
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        if (i % 2 == 0) {
            newArr[i] = newArr[i].split("").reverse().join("")
        }
    }
    return newArr.join("")
};