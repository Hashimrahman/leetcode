var maxScore = function (s) {
    let score = 0;
    let left = '';
    let right = '';
    let zeroCount = 0;
    let oneCount = 0;
    let temp = 0;
    for (let i = 0; i < s.length - 1; i++) {
        left = s.substring(0, i + 1);
        right = s.substring(i + 1);
        for (let i = 0; i < left.length; i++) {
            if (left[i] == 0) {
                zeroCount += 1;
            }
        }
        for (let i = 0; i < right.length; i++) {
            if (right[i] == 1) {
                oneCount += 1;
            }
        }
        temp = zeroCount + oneCount;
        if (temp > score) {
            score = temp;
        }
        zeroCount = 0;
        oneCount = 0;
    }
    return score;
};