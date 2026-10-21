const myNumber = new Promise((resolve,reject)=>{
    let number = 99;

    if(number % 2 === 0 ){
        resolve("number in even")
    }else{
        reject("number is odd")
    }
})

myNumber
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error)
})