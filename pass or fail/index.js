const grade = new Promise((resolve,reject)=>{
    let marks = 76;

    if(marks >=80){
        resolve(" grade A")
    }else if(marks>=70){
        resolve("grade B")
    }else if(marks=>60){
        resolve("grade C")
    }else if(marks >=50){
        resolve("grade D")
    }else{
        reject("you fail")
    }
})

grade
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error)
})