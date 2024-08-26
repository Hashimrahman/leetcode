var stringMatching = function(words) {
    let res= [];
    for(let i = 0; i<words.length;i++){
        for(j=0;j<words.length;j++){
            if(words[j].includes(words[i]) && i !=j){
                res.push(words[i])
            }
        }
    }
    return [...new Set(res)];
};