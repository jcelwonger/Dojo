var arr = [1, 1, 1, 1, 3, 5, 56, 6, 'Jason', 'Jason', 7, 'Elwonger', 8, 89, 89];
console.log(deDupe(arr));



function deDupe(arr) {
    var newArr = [];
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i++) {
        if (arr[i] == arr[i + 1]) {
            continue;
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
