function addBinary(a,b) {

    let sum = a + b;
    
    const newArray = []
    
    while( sum > 0){

        if(sum % 2 === 0){
            newArray.unshift(0);
        }
        else {
            newArray.unshift(1);
        }

        sum = Math.floor(sum / 2);
    }
    return newArray.join('');
}

console.log(addBinary(98,1));

// Other solutions 

function addBinary(a,b){
    return (a+b).toString(2)
}

