
// function sumDigits(n) {
//     let sum = 0;
//     while (n) {
//         digit = n % 10;
//         sum += digit;
//         n = (n - digit) / 10;
//     }
//     return sum;
// }

const getSumOfDigits = (num)=>{
    return String(num)
      .split('')
      .reduce((acc, curr) => {
        return acc + Number(curr);
      }, 0);
  }
 
 


/* const fuctorialSum = (limit)=>{
    mult = 1
    for(let i = 1; i<=limit; i++){
        mult *= i
        
    }

    let res =  getSumOfDigits(BigInt(mult))

    return res
  
} */

 

 const fact = x => {
    let acc = 1n;
    while (x > 1n) {
      acc = acc * --x;
    }
    return acc;
  }

  console.log(getSumOfDigits(fact(100n)));
 