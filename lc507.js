var checkPerfectNumber = function(num) {
    let divisor = [];
    let i = 1;
    while(i<= num/2){
        if(num % i == 0){
            divisor.push(i);
        }
        i++;
    }
    let sum = divisor.reduce((acc,curr) => acc+=curr,0);
    if(sum == num){
        return true;
    }
    else{
        return false;
    }
};