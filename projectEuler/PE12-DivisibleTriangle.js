

// const dividerFinder = (num)=>{
//     let count = 0;
//     for (let i = 1 ; i<= num; i++ ){
//         if (num % i == 0){
//             count ++
//         }
//     }
//     return count
// }

// function numberOfFactors(n) {
//     let f=0
//     for(let i=2; i<n/2; i++)
//       if(n%i==0)
//         f++
//     return f+2
//   }

  function numberOfFactors(n) {
    let count=2
    let i=2
    
    const bound = Math.floor(Math.sqrt(n))
    
    while(i < bound) {
      if (n % i == 0)
        
        count += 2
      i += 1
    }
  
    if (i**2==n)
      count++
    return count
  }

  console.log(numberOfFactors(500));


// const highlyDivisibleTriangle = (limit)=>{
//     let counter =2 ;
//     let sum = 1;
//     while(true){
//         sum += counter;
//         if(dividerFinder(sum)>limit){
//             return sum
//         }
//         counter++
//     }
// }

 

// console.log(highlyDivisibleTriangle(500))
