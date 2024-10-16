var minGroups = function (intervals) {
    let res = []

    for (let [l, r] of intervals) {
        res.push([l, 1])
        res.push([r, -1])
    }

    res.sort((a, b) => a[0] == b[0] ? b[1] - a[1] : a[0] - b[0])

    let current = 0
    let max = 0
    for (let [time, type] of res) {
        if (type == 1) {
            current++
        } else {
            current--
        }
        max = Math.max(max, current)
    }
    return max
};