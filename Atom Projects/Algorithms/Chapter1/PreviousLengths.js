function previousLengths(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].length - 1;
  }
  return arr;
}
var arr = ["a","to","the","bees","knees"];
console.log(previousLengths(arr));
