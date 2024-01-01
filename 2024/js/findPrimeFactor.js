/// How could you find all prime factors of a number?

const findPrimeFactor = (number) => {
  let factorsArray = [];
  var divisor = 2;
  while (number > 2) {
    if (number % divisor == 0) {
      factorsArray.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  }
  return factorsArray;
};

console.log(findPrimeFactor(69));
