function evenOdd(arr) {
  var countOdd = 0;
  var countEven = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      countOdd += 1;
      countEven = 0;
    } else if (arr[i] % 2 === 0) {
      countEven +=1;
      countOdd = 0;
    }
    if (countOdd == 3) {
      console.log("That's odd!");
    } else if (countEven == 3) {
      console.log("That's even");
    }
  }
}

var arr = [2,12,21,1,3,2,5,4,2,3,4,2,8];
evenOdd(arr);
