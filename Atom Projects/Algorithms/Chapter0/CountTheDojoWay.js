var fives = "Coding";
var tens = " Dojo";

for (var i = 0; i <= 100; i++) {
  if (i % 5 === 0 && i % 10 != 0) {
    console.log(fives);
  } else if (i % 5 === 0 && i % 10 === 0) {
    console.log(fives + tens);
  } else {
    console.log(i);
  }
}
