var buyChoco = function (prices, money) {
    let sortedArray = prices.sort((a, b) => a - b);
    let balance = money - (sortedArray[1] + sortedArray[0])
    return balance < 0 ? money : balance
};