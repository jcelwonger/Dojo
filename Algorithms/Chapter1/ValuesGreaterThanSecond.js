function greaterThanSecond(arr) {
  var count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
      console.log(arr[i]);
      count += 1;
    }
  }
  return count;
}

var arr = [1,3,5,7,9,13];
console.log(greaterThanSecond(arr) + " values greater than second index.");
