function arrayLength(n) {
  var newArr = [];
  var i = 0;
  while (n >= 0) {
    newArr[i] = n;
    i += 1;
    n -= 1;
  }
  return newArr;
}

var arrLength = arrayLength(7);
console.log(arrLength.length);
