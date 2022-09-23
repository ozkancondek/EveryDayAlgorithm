/* const pandigitalFinder = (num, limit) => {
  let arr = [];
  for (let i = 1; i <= limit; i++) {
    arr.push(num * i);
  }
  return arr.map((n) => n.toString()).join("");
};
//console.log(pandigitalFinder(192, 3));

const biggestPan = (limit) => {
  for (let i = 1; i <= 3; i++) {
    if (pandigitalFinder(i, limit).length >= 10) {
      return i;
    }
  }
};

console.log(biggestPan(9)); */

var panDigitals = [];

outerloop: for (var number = 9999; number > 0; number--) {
  var numString = "" + number;
  var multiplier = 1;
  while (numString.length < 9) {
    multiplier++;
    numString += number * multiplier;
  }

  if (numString.length == 9) {
    for (var digit = 1; digit < 10; digit++) {
      if (numString.indexOf("" + digit) == -1) {
        continue outerloop;
      }
    }
    panDigitals.push(numString);
  }
}
panDigitals.sort();
console.log(panDigitals[1]);
console.log(panDigitals[panDigitals.length - 1]);
