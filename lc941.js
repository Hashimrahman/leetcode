var validMountainArray = function (arr) {
    if (arr.length < 3) {
        return false
    }
    let flag = true
    let index = 0
    let diff = 0
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            return false
        }

        if (flag == true) {
            if (arr[i] < arr[i + 1]) {
                continue;
            }
            else {
                flag = false
                diff++
                index = i
            }
        }
        else if (flag == false) {
            if (arr[i] > arr[i + 1]) {
                continue;
            }
            else {
                flag = true
                diff++
            }
        }
    }
    return diff === 1 && index != 0 ? true : false
};