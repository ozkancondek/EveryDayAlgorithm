const findDIvisorsSum = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
};

const isAmicable = (num) => {
  let divSum = findDIvisorsSum(num);

  let otherDivSum = findDIvisorsSum(divSum);

  return divSum !== num &&  otherDivSum === num ? true : false;
};

const findSumOfAmicablesUnderLimit = (limit)=>{
    let arr = [];
    for (let i = 1; i<limit; i++){
        if (arr.includes(i)){
            continue
        }
        else{
            if(isAmicable(i)){
                arr.push(i)
            }
        }
    }
return arr.reduce((a,b)=>a+b,0)
}

console.log(findSumOfAmicablesUnderLimit(10000));