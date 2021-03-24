//assignment3.js

/*
Given a string str and number n, write a program that recursively appends 
a copy of string str n times and returns the resulting string in a sentence 
explaining whether the resulting string has an odd or even amount of the passed in str
*/

function RecursiveCopy(str, n) {
  let oddOrEven;
  if (n % 2 === 0){
    oddOrEven = "an odd";
  }
  else {
    oddOrEven = "a even";
  }

  var recursiveFunction = (str, n) =>{
    if(n === 0){
      return str;
    }
    return (str + recursiveFunction(str, n - 1));
  }
  
  
  console.log(`${recursiveFunction(str,n)} has ${oddOrEven} of ${str}'s`)
}

RecursiveCopy("a", 5);