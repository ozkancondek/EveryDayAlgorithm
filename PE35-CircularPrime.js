const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };
const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

//   let findPermutations = (num) => {
//     let string = num.toString()
//     let permutationsArray = [] 
//     if (!!string.length && string.length < 2 ){
//       permutationsArray.push(parseInt(string))
//       return permutationsArray
//     }
  

     
//     for (let i = 0; i < string.length; i++){
//       let char = string[i]
  
//       if (string.indexOf(char) != i)
//       continue
  
//       let remainder = string.slice(0, i) + string.slice(i + 1, string.length)
  
//       for (let permutation of findPermutations(remainder)){
//         permutationsArray.push(parseInt(char + permutation)) }
//     }
//     return permutationsArray
//   }
  
 const findCircularsUnderLimit=(limit)=>{
    let arr = []
    for (let i = 2; i<limit; i++){
        if(isPrime(i)){
            let res = reversedNum(i)
            if(isPrime(res)){
                arr.push(i)
            }
        }
    }
    return arr.length
 }

 console.log(findCircularsUnderLimit(100));
 

 
 
    
 
 