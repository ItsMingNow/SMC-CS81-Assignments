// Yanming Yu

/*

Multiple Choice Answers

1. D

2. C

3a. A

3b. C

3c. B

Short Answer 1

Not in function
    in console.log(factorial(3))       
        in factorial(3)
            in factorial(2)
                in factorial(1)
                    in factorial(0)
                in factorial(1)
            in factorial(2)
        in factorial(3)
    in console.log
Not in function

Short Answer 2

y is 16

*/

//Problem 1

function SumDiff(array){
    let sumEven = 0;
    let sumOdd = 0;
    let result = -Infinity;

    for(let i = 0; i<array.length; i++){
        if(array[i] % 2 == 0){
            sumEven += array[i];
        }
        else{
            sumOdd += array[i];
        }
    }
    
    if (sumEven > sumOdd){
        result = sumEven - sumOdd;
    }
    else if( sumEven < sumOdd){
        result = sumOdd - sumEven;
    }
    else {
        return 0
    }

    return result;
}

// const testArray = [1,5,8,2,10,33,36];
// const testArray2 = [37, 2];
// const testArray3 = [6, 3,3];
// console.log(SumDiff(testArray));
// console.log(SumDiff(testArray2));
// console.log(SumDiff(testArray3));

// Problem 2 - Recursive Multiplication

function getPageCount(obj){
    if(obj["next"] == null){
        return obj["pages"];
    }
    return obj["pages"] * getPageCount(obj["next"]);
}


// Test case

let jason =
{
    "book":"A",
    "pages":1,
    "next":{
      "book":"B",
      "pages":2,
      "next":{
         "book":"C",
         "pages":3,
         "next": null
        }
    }
};

// console.log(getPageCount(jason)); //Outputs 6

// Problem 3

function isPresent(obj, searchValue){
    if(obj["value"] == searchValue){
        return true;
    }
    if(obj["value"] > searchValue){
        if(obj["left"] == null){
            return false;
        }
        return isPresent(obj["left"], searchValue);
    }
    if(obj["value"] < searchValue){
        if(obj["right"] == null){
            return false;
        }
        return isPresent(obj["right"], searchValue);
    }
}

let tree = { 
    "value": 100, 
    "left": {
        "value": 50,
        "left": {
            "value": 25,
            "left": null,
            "right": null
        },
        "right": {
            "value": 75,
            "left": null,
            "right": null
        }
    }, 
    "right": {
      "value": 150,
      "left": null,
      "right": null
    }
}

// console.log(isPresent(tree, 25));
// console.log(isPresent(tree, 150));
// console.log(isPresent(tree, 75));
// console.log(isPresent(tree, 26));