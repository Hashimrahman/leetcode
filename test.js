// let obj = {1:'hi',2:'hello'};
// let arr = JSON.parse(obj);
// console.log(arr);


function secondLargest(arr){
    let largest = arr[0];
    let secondLargest = null;
    for(let i = 1; i< arr.length;i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
    }

    return secondLargest;
}

console.log(secondLargest([1,1,1,1]));
