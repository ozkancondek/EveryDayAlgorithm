let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
let count = 1;

for (let i = 1; i <= arr.length; i++) {
  if (!arr[i]) {
    break;
  }
  while (true) {
    if (arr.length <= count) {
      count = i + 1;
      break;
    } else {
      arr.splice(count, 1);
      count += i;
    }
  }
  console.log(`${i}. step completed. arr : ${arr}`);
}
