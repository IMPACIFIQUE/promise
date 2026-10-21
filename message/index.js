const greeting = new Promise((resolve,reject)=>{
    resolve("Hello, World!");
})

greeting
.then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(error);
})