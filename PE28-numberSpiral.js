const spiralArray = (limit)=>{
    let sum = 1
    let counter = 3;
    while (counter**2<=limit**2){
        let base = counter-1
        sum += (counter**2 )
        sum+= (counter**2  - base) 
        sum+= (counter**2  - 2*base) 
        sum+= (counter**2 - 3*base)
        
        counter +=2;
    }
    
    return sum 

}

console.log(spiralArray(1001));