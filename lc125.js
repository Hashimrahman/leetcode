var isPalindrome = function (s) {
    let newS = s.toLowerCase().split('').filter((x) => ((x >= 'a' && x <= 'z') || (x >= 0 && x <= 9)) && x!=" ").reverse().join('');
    s = s.toLowerCase().split('').filter((x) => ((x >= 'a' && x <= 'z') || (x >= 0 && x <= 9)) && x!=" ").join('');
    return s == newS ? true : false;
};