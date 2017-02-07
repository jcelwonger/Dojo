function lengthValue(num1,num2) {
  var arrNew = [];
  if (num1 == num2) {
    console.log("Jinx!");
    return;
  } else {
    for (var i = 0; i < num1; i++) {
      arrNew.push(num2);
    }
  }
  return arrNew;
}

console.log(lengthValue(4,1));
