function addSeven(arr) {
  var arrNew = [];
  for (var i = 1; i < arr.length; i++) {
    arrNew.push(arr[i] + 7);
  }
  return arrNew;
}

var arr = [1,2,3,4,5];
console.log(addSeven(arr));
console.log(arr);
