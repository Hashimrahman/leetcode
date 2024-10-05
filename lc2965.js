var findMissingAndRepeatedValues = function(grid) {
    let flatten = grid.flat();
    let unique = [...new Set(flatten)];
    let count = grid.length ** 2;
    let normalSum = (count * (count + 1))/2;
    let actualSum = flatten.reduce((acc,curr) => acc+= curr, 0);
    let uniqueSum = unique.reduce((acc,curr) => acc+= curr, 0);
    let missing = normalSum - uniqueSum; 
    let repeated = actualSum - uniqueSum;
    return [repeated,missing];
};