function lowHigh(arr) {
  var low = 0;
  var high = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
    }
    if (arr[i] > high) {
      high = arr[i];
    }
  }
  console.log(low);
  return high;
}

var arr = [-2,3,2,0,9];
console.log(lowHigh(arr));
