var addDigits = function(num) {
    if(num < 10){
        return num;
    }
    else{
        num = num.toString().split('').map((x) => Number(x)).reduce((acc,curr) => acc = acc+curr,0)
        return addDigits(num);
    }
};