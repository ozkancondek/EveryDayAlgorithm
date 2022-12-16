const returnNumToArr = (num) => [...num.toString().split("")];
const checkArrayInArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i <= arr1.length - 1; i++) {
      let res = arr2.includes(arr1[i]);
      if (res == false) {
        return false;
      }
    }
    return true;
  }
};

const perMulti = (num) => {
  let numArr = returnNumToArr(num);
  let twoMulti = returnNumToArr(num * 2);
  let threeMulti = returnNumToArr(num * 3);
  let fourMulti = returnNumToArr(num * 4);
  let fiveMulti = returnNumToArr(num * 5);
  let sixMulti = returnNumToArr(num * 6);
  if (
    checkArrayInArray(numArr, twoMulti) &&
    checkArrayInArray(numArr, threeMulti) &&
    checkArrayInArray(numArr, fourMulti) &&
    checkArrayInArray(numArr, fiveMulti) &&
    checkArrayInArray(numArr, sixMulti)
  ) {
    return true;
  } else {
    return false;
  }
};

const resFunc = () => {
  for (let i = 200; i <= 1000000; i++) {
    if (perMulti(i)) {
      return i;
    }
  }
  return "change limit";
};

console.log(resFunc());
