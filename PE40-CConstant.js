const cConstant = (nth) => {
  let arr = new Array();
  for (let i = 1; i <= nth; i++) {
    i.toString()
      .split("")
      .map((a) => arr.push(a));
  }
  return arr[nth - 1];
};

let final =
  cConstant(1) *
  cConstant(10) *
  cConstant(100) *
  cConstant(1000) *
  cConstant(10000) *
  cConstant(100000) *
  cConstant(1000000);

let a = 1 * 1 * 5 * 3 * 7 * 2 * 1;

console.log(a);
