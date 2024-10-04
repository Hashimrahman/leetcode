var scoreOfString = function(s) {
    let sum = 0;
    for(let i = 0; i< s.length-1;i++){
        let temp = Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1));
        sum+=temp;
    }
    return sum
};