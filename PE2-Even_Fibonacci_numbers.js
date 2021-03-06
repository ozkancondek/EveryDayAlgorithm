// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const SumEvenFibonacci = (limit) => {
  let arr = [1, 2];
  let evenSum;
  while (true) {
    let lastTwo = arr[arr.length - 1] + arr[arr.length - 2];
    if (lastTwo >= limit) {
      return evenSum;
    }
    arr.push(lastTwo);
    evenSum = arr.filter((e) => !(e % 2)).reduce((a, b) => a + b);
  }
};

console.log(SumEvenFibonacci(4 * 10 ** 6));
