var romanToInt = function (s) {
    let arr = s.split('');
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'I' && arr[i + 1] == 'V') {
            res += 4;
            i++;
        }
        else if (arr[i] == 'I' && arr[i + 1] == 'X') {
            res += 9;
            i++;
        }
        else if (arr[i] == 'X' && arr[i + 1] == 'L') {
            res += 40;
            i++;
        }
        else if (arr[i] == 'X' && arr[i + 1] == 'C') {
            res += 90;
            i++;
        }
        else if (arr[i] == 'C' && arr[i + 1] == 'D') {
            res += 400;
            i++;
        }
        else if (arr[i] == 'C' && arr[i + 1] == 'M') {
            res += 900;
            i++;
        }
        else {
            switch (arr[i]) {
                case 'I':
                    res += 1;
                    break;
                case 'V':
                    res += 5;
                    break;
                case 'X':
                    res += 10;
                    break;
                case 'L':
                    res += 50;
                    break;
                case 'C':
                    res += 100;
                    break;
                case 'D':
                    res += 500;
                    break;
                case 'M':
                    res += 1000;
                    break;

            }
        }
    }
    return res;
};