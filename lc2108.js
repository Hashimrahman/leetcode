var firstPalindrome = function(words) {
    let res ='';
    for(let i =0;i<words.length;i++){
        let rev = words[i].split('').reverse().join('')
        if(rev == words[i]){
            res = words[i];
            break;
        }
    }
    return res;
};