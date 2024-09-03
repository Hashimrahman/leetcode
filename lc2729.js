var isFascinating = function(n) {
    let two = (2 * n).toString();
    let three = (3 * n).toString();
    let res = n.toString().concat(two,three);
    res = res.split('');
    if(res.includes('0')){
        return false
    }
    else{
        let unique = [...new Set(res)];
        if(res.length == unique.length){
            return true;
        }
        else{
            return false
        }
    }
    
};