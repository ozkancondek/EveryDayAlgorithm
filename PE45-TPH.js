/* const isTriangle = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i * (i + 1) * 0.5 === num) {
      return true;
    }
  }
  return false;
};
const isPentagonal = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i * (3 * i - 1) * 0.5 === num) {
      return true;
    }
  }
  return false;
};
const isHexagonal = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i * (2 * i - 1) === num) {
      return true;
    }
  }
  return false;
};

let commonNum = (limit) => {
  for (let i = 600000; i <= limit; i++) {
    if (isTriangle(i) && isHexagonal(i) && isPentagonal(i)) {
      return i;
    }
  }
  return false;
};
 */
function isPentagonal(x) {
  var r = Math.sqrt(1 + 24 * x);
  return r % 6 === 5;
}

function solution() {
  for (let m = 144; ; m++) {
    let res = 2 * m * m - m;
    if (isPentagonal(res)) {
      return res;
    }
  }
  return null;
}

console.log(solution());
