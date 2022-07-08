// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const PolindromeChecker = (num) => {
  const strNum = num.toString();
  if (parseInt([...strNum].reverse().join("")) === num) {
    return true;
  }
  return false;
};

const LargestPolindromeProduct = () => {
  for (let i = 999; i > 900; i--) {
    for (let j = 999; j > 900; j--) {
      if (PolindromeChecker(i * j)) {
        return i * j;
      }
    }
  }
};

console.log(LargestPolindromeProduct());
