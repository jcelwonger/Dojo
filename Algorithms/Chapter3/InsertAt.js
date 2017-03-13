function InsertAt(arr, index, val) {
    arr.splice(index, 0, val);
    return arr;
}

var arr = [1, 2, 3, 4, 5];
console.log(InsertAt(arr, 2, 'Jason'));
