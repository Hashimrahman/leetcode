var nextGreatestLetter = function(letters, target) {
    let sorted = letters.sort();
    let res='';
    for(let i = 0; i < sorted.length;i++){
        if(sorted[i] > target){
            res = sorted[i];
            break;
        }
    }
    if(res){
        return res
    }
    else{
        return letters[0];
    }
};