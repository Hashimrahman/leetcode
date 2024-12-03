var truncateSentence = function(s, k) {
    let arr = s.split(' ')
    arr.splice(k,s.length-k)
    return arr.join(' ')
};