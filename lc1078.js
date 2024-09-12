var findOcurrences = function(text, first, second) {
    let textArr = text.split(" ");
    res = [];
    for(let i = 0;i<textArr.length-2;i++){
        if(textArr[i] == first && textArr[i+1] == second){
            res.push(textArr[i+2]);
        }
    }
    return res;
};