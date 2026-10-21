const difference = new Promise((resolve,reject)=>{
    let num1 = 5;
    let num2 = 2;
    let sub = num1 - num2;

    resolve(sub);
})
difference
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})