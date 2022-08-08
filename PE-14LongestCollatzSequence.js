const collatzSequence = (start) => {
  let arr = [start];

  while (arr[arr.length - 1] != 1) {
    if (start % 2 === 0) {
      start /= 2;
      arr.push(start);
    } else {
      start = start * 3 + 1;
      arr.push(start);
    }
  }

  return arr.length;
};

const LngestCollatz = (limit) => {
  let arr = [];
  for (let i = limit; i >= 1; i--) {
    arr.push(collatzSequence(i));
  }
  return Math.max(...arr);
};

console.log(LngestCollatz(100000000));
