

const distPow = (bottom,top)=>{
    let arr = [];
    for(let i = bottom; i <= top; i++){
        for(let j = bottom; j<= top; j++){
            arr.push(i**j)
        }
    }
    return new Set(arr).size

};

console.log(distPow(2,100));