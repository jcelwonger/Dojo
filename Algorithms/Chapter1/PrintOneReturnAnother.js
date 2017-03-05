function oneAnother(arr) {

  var secondToLast = arr[arr.length - 2];
  var firstOdd = 0;
  console.log(secondToLast);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      firstOdd = arr[i];
      return firstOdd;
    }
  }
}

var arr = [2,43,6,5,7,1,3];
console.log(oneAnother(arr));
