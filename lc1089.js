var duplicateZeros = function(arr) {
    for(let i = 0;i<arr.length-1;i++){
        if(arr[i] == 0){
            arr.splice(i+1,0,0);
            arr.pop();
            i++;
        }
    }
    return arr;
};