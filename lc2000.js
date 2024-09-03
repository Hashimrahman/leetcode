var reversePrefix = function(word, ch) {
    let index = word.indexOf(ch);
    let preFix = word.slice(0,index+1).split('').reverse().join('');
    return preFix + word.slice(index+1)
};