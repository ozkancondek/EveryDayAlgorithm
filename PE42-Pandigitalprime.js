const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

var isPandigital = function (number) {
  var numString = number + "";
  var numLength = numString.length;
  for (var i = 1; i <= numLength; i++) {
    if (numString.indexOf(i + "") == -1) {
      return false;
    }
  }

  return true;
};

function findBiggest(limit) {
  let bg = 1;
  for (let i = 2140; i <= limit; i++) {
    isPandigital(i) && isPrime(i) ? (bg = i) : null;
  }
  return bg;
}

//console.log(findBiggest(100000000));
