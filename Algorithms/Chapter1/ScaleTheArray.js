function scaleArray(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * num;
  }
  return arr;
}

var arr = [1,2,3,4,5,6];
var num = 2;
console.log(scaleArray(arr, num));
