var reverseWords = function(s) {
    return s.trim().split(' ').reverse().filter((x) => x!="").join(' ');
};