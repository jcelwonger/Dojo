function keepX(arr, x) {
    arr = arr.splice(arr.length - x, x);
    return arr;
}

var arr = [1,2,3,4,5,6,7,8,9,10];
var x = 4;

console.log(keepX(arr, x));
