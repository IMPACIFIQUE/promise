const addNumbers = (firstNum, secondNum) => {
    return new Promise((resolve, reject) => {
        let sum = firstNum + secondNum;
        resolve(sum);
    });
};

addNumbers(15, 25)
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.log(error);
    });