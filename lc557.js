var reverseWords = function(s) {

    let arr = s.split(' ');
    let resArr = [];
    for(let i=0;i<arr.length;i++){
        resArr.push(arr[i].split('').reverse().join(''));
    }
    return resArr.join(' ');
};