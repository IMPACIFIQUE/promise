const addition = new Promise ((resolve,reject)=>{
    let num1 = 2;
    let num2 = 3;
    let sum = num1 + num2;
    resolve(sum)
})

addition
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
})