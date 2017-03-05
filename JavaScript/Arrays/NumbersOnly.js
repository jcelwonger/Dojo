function numbersOnly(arr) {
    var arrNew = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}

function stripStrings(arr) {
    var i = arr.length;
    while (i--) {
        if (typeof arr[i] !== "number") {
            arr.splice(i, 1);
        }
    }
}
var arr = ["Jason", 1, 4, "Dilbert", "Monday", 2, 5, "America"];
console.log(numbersOnly(arr));
console.log(arr);
stripStrings(arr);
console.log(arr);
