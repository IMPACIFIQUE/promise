const myNumber = new Promise((resolve,reject)=>{
    let num = 14;
    if(num>=0){
        resolve("number is positive");
        return;
    }else{
        reject("number is negative");
    }
})
myNumber
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
})