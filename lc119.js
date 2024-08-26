var getRow = function (rowIndex) {
    var res = [];
    let row = [];
    for (let i = 0; i < rowIndex; i++) {
        row.length = i + 1;
        if (i <= 1) {
            for (j = 0; j < row.length; j++) {
                row[j] = 1;
            }
        }
        else {
            row[0] = 1;
            row[row.length - 1] = 1;
            for (let j = 1; j < row.length - 1; j++) {
                row[j] = res[i - 1][j] + res[i - 1][j - 1];
            }
        }
        res.push(row);
        row = [];
    }
    // console.log(res[rowIndex]);
    let index= rowIndex;
    console.log(res[index]);
    return res[2];
};

getRow(3)