//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumSquareDifference = (n) => {
  let squareSum = (n * (n + 1) * (2 * n + 1)) / 6;
  let squareOfSum = (n * (n + 1) * 0.5) ** 2;
  return Math.abs(squareOfSum - squareSum);
};

const longMethod = (n) => {
  let [sum1, sum2] = [0, 0];
  for (i = 1; i <= n; i++) {
    sum1 += i ** 2;
    sum2 += i;
  }

  return Math.abs(sum1 - sum2 ** 2);
};
