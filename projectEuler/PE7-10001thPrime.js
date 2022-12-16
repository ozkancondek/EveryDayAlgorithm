const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const find_nth_prime = (n) => {
  let primeArray = [];
  let k = 2;

  while (primeArray.length < n) {
    if (isPrime(k)) {
      primeArray.push(k);
    }
    k++;
  }
  return primeArray.slice(-1)[0];
};

console.log(find_nth_prime(10001));
