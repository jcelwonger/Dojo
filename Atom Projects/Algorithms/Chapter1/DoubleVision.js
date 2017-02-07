function double(arr) {
  var arrNew = [];
  for (var i = 0; i < arr.length; i++) {
    arrNew.push(arr[i]*2);
  }
  return arrNew;
}

var arr = [2,4,6];
console.log(double(arr));
console.log(arr);
