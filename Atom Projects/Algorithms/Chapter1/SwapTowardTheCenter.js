function swap(arr) {
  var swapLast = arr.length - 1;
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[0]) {
      temp = arr[i];
      arr[i] = arr[swapLast];
      arr[swapLast] = temp;
    }
    if (i == 3) {
      temp = arr[i];
      arr[i] = arr[2];
      arr[2] = temp;
    }
  }
  return arr;
}

var arr = [1,2,3,4,5,6];
console.log(swap(arr));
