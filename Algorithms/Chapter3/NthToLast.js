var arr = [5, 2, 3, 6, 4, 9, 7];
console.log(nToLast(arr, 3));

function nToLast(arr, i) {
    if (arr.length < 1) {
        return null;
    } else {
        return arr[arr.length - i];
    }
}
