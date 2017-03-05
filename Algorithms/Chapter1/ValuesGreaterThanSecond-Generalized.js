function greaterThanSecond(arr) {
  var count = 0;
  var arrNew = [];
  if (arr.length == 1) {
    return "Only one index, no comparison can be made."
  } else {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > arr[1]) {
        count += 1;
        arrNew.push(arr[i]);
      }
    }
  }
  console.log(count);
  return arrNew;
}

var arr = [1,2,1,1,1,5,7,3,1,1];
console.log(greaterThanSecond(arr));
