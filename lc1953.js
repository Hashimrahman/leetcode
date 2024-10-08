var minSwaps = function(s) {
    let balance = 0;  
    let swaps = 0;     
    for (let char of s) {
        if (char === '[') {
            balance++;   
        } else {
            balance--;   
        }
        if (balance < 0) {
            swaps++;    
            balance += 2; 
        }
    }
    return swaps;
};