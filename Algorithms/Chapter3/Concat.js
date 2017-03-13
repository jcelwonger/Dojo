var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6, 7, 8];
console.log(concatArrays(arr1, arr2));

function concatArrays(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for (var j = 0; j < arr2.length; j++) {
        newArr.push(arr2[j]);
    }
    return newArr;
}
