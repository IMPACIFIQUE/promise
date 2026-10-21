const division = new Promise((resolve,reject)=>{
    let num1=12;
    let num2 = 3;
    let div = num1 / num2;
    resolve(div);
})
division
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
})