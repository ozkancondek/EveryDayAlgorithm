

let myArr = [{id:1,name:"ozkan",age:23,city:"köln"},{id:2,name:"john",age:32,city:"berlin"},{id:3,name:"doe",age:45,city:"bonn"}]
//findIndex method:gives index or -1
const updateData = (arr,el)=>{
    let check = arr.findIndex(element=>{
        if (element.id===el.id){
            return true
           
        }
        return false
    })

    if(check === -1){
        arr.push(el)
    }
    else{
        arr.splice(check,1)
    }
      

    return arr
    

}

console.log(updateData(myArr,{id:2,name:"john",age:23,city:"berlin"}));


 
 
 