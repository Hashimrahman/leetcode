let x = [1,2];
let value = 1;
function test (val, x) {

    val = val + 1;
    return val;
}
for(let i = 0;i<x.length;i++){
    value = test(value,x);
}
console.log(value);

