const grade = new Promise((resolve,reject)=>{
    let marks = 90;

    if(marks >=50){
        resolve(" you pass")
    }else{
        reject("you fail ")
    }
})

grade
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error)
})