function incrementTheSeconds(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      arr[i] += 1;
    }
    console.log(arr[i]);
  }
  return arr;
}

var arr = [1,2,3,4,5,6,7];
console.log(incrementTheSeconds(arr));
