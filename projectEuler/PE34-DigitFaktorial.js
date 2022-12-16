  const facFinder = (num)=>{
    let multi = num
    while(num >=2){
        multi *=(num-1)
        num--
    }
    return multi
}


const isCrious = (num)=>{
    const res = Array.from(num.toString()).reduce((acc,item)=>acc + facFinder(parseInt(item)),0)

    return num === res ? num :null 

}
 
/* 
 
const digitFac = (limit)=>{
    let sum = 0
    for (let i = 11; i<=limit; i++){
        isCrious(i) ? sum += isCrious(i) : null

    }
    return sum
}
 

console.log(digitFac(10000000));  */
 




 


//******************** */
/* var FACT = [1];
for (var i = 1; i < 10; i++)
    FACT[i] = FACT[i - 1] * i; */


/* FACT = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]

function factorialSum(n) {

    var sum = 0;
    while (n > 0) {
        sum+= FACT[n % 10];
        n = n / 10 | 0;
    }
    return sum;
}

function solution() {
    var sum = 0;
    for (var i = 10; i <= 1499999; i++) {
        if (i === factorialSum(i)) {
           
            sum+= i;
            
        }
    }
    return sum;
}

console.log(solution()); */
 