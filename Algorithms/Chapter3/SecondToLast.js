var arr = [42, true, 4, 'Liam', 7];
console.log(secondToLast(arr));

function secondToLast(arr) {
    if (arr.length < 1) {
        return null;
    } else {
        return arr[arr.length - 2];
    }
}
