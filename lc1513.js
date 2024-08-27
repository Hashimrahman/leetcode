var numSub = function (s) {
    let res = 0;
    let count = 0;
    const mod = 1000000007;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            count++;
            res = (res + count) % mod;
        }
        else {
            count = 0;
        }
    };
    return res;
}