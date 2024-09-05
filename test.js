// let obj = {1:'hi',2:'hello'};
// let arr = JSON.parse(obj);
// console.log(arr);


function secondLargest(arr) {
    let largest = arr[0];
    let secondLargest = null;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (secondLargest < arr[i]) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(secondLargest([1, 4, 8, 2, 9]));
// let arr = [1, 12, 8, 2, 9,6,11];
// let largest = arr[0];
// let secondLargest = null;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     }
//     else if(secondLargest<arr[i]){
//         secondLargest = arr[i]
//     }
// }
// console.log(secondLargest);
