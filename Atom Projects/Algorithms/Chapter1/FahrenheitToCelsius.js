function fahrenheitToCelsius(fDegrees) {
  var cDegrees = (fDegrees - 32) / (9/5);
  return cDegrees;
}

console.log(fahrenheitToCelsius(80));
