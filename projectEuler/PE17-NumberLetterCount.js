const arr1 = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const arr2 = [
  "ten",
  "eleven",
  "twelf",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const arr3 = [
  "",
  "",
  "twenty",
  "thirty~",
  "fourty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

 

const letterCounter = (num) => {

 let addMe = [] 
  let numStr = num.toString();
  let numLen = numStr.length;
  var i = 1;

  if (numLen == 1) {
    addMe.push(arr1[num]);
  } else if (numLen == 2) {
    if (numStr[0] == 1) {
      addMe.push(arr2[numStr[1]]);
    } else {
      if (numStr[1] == 0) {
        addMe.push(arr3[numStr[0]]);
      } else {
        addMe.push(arr3[numStr[0]]);
        addMe.push(arr1[numStr[1]]);
      }
    }
  } else if (numLen == 3) {
    if (numStr[1] == 0) {
      if (numStr == 100) {
        addMe.push("hundred");
      } else {
        addMe.push(`${arr1[numStr[0]]}hundredand${arr1[numStr[2]]}`);
      }
    } else if (numStr[1] == 1) {
      addMe.push(`${arr1[numStr[0]]}hundredand${arr2[numStr[2]]}`);
    } else {
      addMe.push(
        `${arr1[numStr[0]]}hundredand${arr3[numStr[1]]}${arr1[numStr[2]]}`
      );
    }
  } else if (numLen === 4) {
    addMe.push("onetousend");
  }
  return addMe.join("");
};
 

  
const resFun = ()=>{ 
    let arr = []
    for (let i = 1; i<=1000; i++){
        arr.push(letterCounter(i))

    }
    return arr.join("").length 


}

console.log(resFun());  