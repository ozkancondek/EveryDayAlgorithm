// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

function LargestPrimeFactorFinder(number) {
  for (let i = 2; i <= number; i++) {
    let divResult = number % i;
    if (divResult === 0 && isPrime(number / i) === true) {
      return number / i;
    }
  }
}

console.log(LargestPrimeFactorFinder(600851475143));
