var arr = [1, 2, 3, 4, 5];
// var oldVal = arr.splice(0, 1)[0];
// console.log(arr);
// console.log(oldVal);


function removeAt(arr, index) {
    var removedVal = arr.splice(index, 1)[0];
    return removedVal;
}

console.log(removeAt(arr, 4));
