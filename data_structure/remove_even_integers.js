function removeEvenNumberInArray(numberArray){
    const result = [];
    numberArray.forEach(element => {
        if(element % 2) {
            result.push(element) 
        }
    });
    return result;
    
}

module.exports = {
    removeEvenNumberInArray
}