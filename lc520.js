var detectCapitalUse = function(word) {
    let temp = word.slice(1);
    if(word == word.toLowerCase()){
        return true
    }
    else if(word == word.toUpperCase()){
        return true
    }
    else if(('A' <= word[0] && word[0] <='Z')&& (temp == temp.toLowerCase())){
        return true
    }
    return false
};
