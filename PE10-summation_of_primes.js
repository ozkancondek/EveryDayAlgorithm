// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const summationOFPrimes = (limit) => {
  let count = 2;
  let sum = 0;
  while (count < limit) {
    if (isPrime(count)) {
      sum += count;
    }
    count++;
  }

  return sum;
};

console.log(summationOFPrimes(2000000));
