const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const isIntL = (str) => {
  while (isPrime(parseInt(str))) {
    str = str.slice(1);
    if (str.length === 1 && isPrime(parseInt(str))) {
      return true;
    }
  }
  return false;
};
const isIntR = (str) => {
  while (isPrime(parseInt(str))) {
    str = str.slice(0, -1);
    if (str.length === 1 && isPrime(parseInt(str))) {
      return true;
    }
  }
  return false;
};

const elevenPrimeSum = (limit) => {
  let sum = 0;
  for (let i = 30; i <= limit; i++) {
    if (isIntL(i.toString()) && isIntR(i.toString())) {
      sum += i;
      console.log(i);
    }
  }
  return sum;
};
//first ten
