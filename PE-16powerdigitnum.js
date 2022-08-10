
// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 21000?


function solution (){
    let g = `${BigInt(Math.pow(2, 1000))}`;
let sum = 0;
for(let i = 0; i < g.length; i++) {
    sum += Number(g[i]);
}
return sum
}


console.log(solution());