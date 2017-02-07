function countPositives(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count += 1;
    }
  }
  arr.pop();
  arr.push(count);
  console.log(arr);
}

var arr = [-2,-3,18,4,2,5];
countPositives(arr);
