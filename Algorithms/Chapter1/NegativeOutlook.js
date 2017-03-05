function negatize(arr) {
  var arrNew = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arrNew.push(arr[i] - (arr[i] * 2));
    } else {
      arrNew.push(arr[i]);
    }
  }
  return arrNew;
}

var arr = [1,-2,-13,4,-3,-2];
console.log(negatize(arr));
