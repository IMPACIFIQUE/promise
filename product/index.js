const product = new Promise((resolve,reject)=>{
    let num1 = 2;
    let num2 = 4;
    let mult = num1*num2;
    resolve(mult);
})
product
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
})