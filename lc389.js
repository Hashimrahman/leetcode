var findTheDifference = function (s, t) {
    let sortedOriginal = s.split("").sort().join('')
    let sortedGenerated = t.split("").sort().join('')
    for (let i = 0; i < sortedGenerated.length; i++) {
        if (sortedOriginal[i] != sortedGenerated[i]) {
            return sortedGenerated[i]
        }
    }
};