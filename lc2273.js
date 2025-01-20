var removeAnagrams = function (words) {
    for (let i = 1; i < words.length; i++) {
        let temp1 = words[i - 1].split('').sort().join('')
        let temp2 = words[i].split('').sort().join('')
        if (temp1 == temp2) {
            words.splice(i, 1)
            i--
        }
    }
    return words
};