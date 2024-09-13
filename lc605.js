var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length ; i++) {
        if(flowerbed.length == 1 && flowerbed[i] == 0){
            return true;
        }
        else if(i == 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0){
            count++;
            i++
        }
        else if(i == flowerbed.length-1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0){
            count++;
            i++
        }
        else if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
            count++;
            i++;
        }
    }
    console.log(count)
    return (count >= n) ? true : false;
};