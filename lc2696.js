var minLength = function (s) {
    while (s.length > 0) {
        if (s.includes('AB')) {
            s = s.split("AB").join("");
        }
        else if (s.includes('CD')) {
            s = s.split("CD").join("");
        }
        else {
            return s.length
        }
    }
    return 0;
};