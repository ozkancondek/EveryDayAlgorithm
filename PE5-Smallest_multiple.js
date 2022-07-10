const isDivisibleUntilLimit = (num, limit) => {
  for (let i = 10; i <= limit; i++) {
    if (num % i == 0) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const isDivisiblaNumber = (limit) => {
  var base = 1;
  do {
    base++;
  } while (!isDivisibleUntilLimit(base, limit));
  {
    return base;
  }
};

console.log(isDivisiblaNumber(20));
