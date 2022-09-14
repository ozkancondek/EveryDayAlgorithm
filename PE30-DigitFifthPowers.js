function findPower(){
    let count = 2;
    let gArr = []
    while(count<=1000000){
        let sum = 0
      //  let srArr = count.toString().split()
      //let srArr = [...count.toString() ]
      let srArr = Array.from(count.toString() )
      srArr.map((e)=>sum+=e**5)
      sum == count ? gArr.push(count) : null
      count++
      
    }
    return gArr.reduce((a,b)=>a+b)

}
console.log(findPower());