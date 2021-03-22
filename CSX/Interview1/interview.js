// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.

let randomNums = [1,14,7,21,-6];

// console.log(randomNums)


/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/

//input array
//output array
function minAndMax(arry){
  let minValue = arry[0];
  let maxValue = arry[0];
  const newArry = [];
  for(let i = 0; i<arry.length; i++){
    if(arry[i] < minValue){
      minValue = arry[i];
      // console.log(`current minimum ${minValue}`);
    }
    if(arry[i] > maxValue){
      maxValue = arry[i];
      // console.log(`current maxmum ${maxValue}`);
    }
  }
  
  newArry.push(minValue);
  newArry.push(maxValue);
  
  return newArry;
//   iterate through arry
//   declare varable min and max value
  
}

// const testArray = [7, 68, 2, 19];

// console.log(minAndMax(testArray));


//  Check that your 'minAndMax' function is working correctly by passing your variable 'randomNums' to the 'minAndMax' function


// console.log(minAndMax(randomNums));//[-6,21]


/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

function between50And500(num){
  
  if(num > 50 && num < 500){
    return true;
  }
  else {
    return false;
  }
  
}

// console.log(between50And500(51));


/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

function divBy100(num){
  
  if(num % 100 == 0){
    return true;
  }
  else {
    return false;
  }
  
}

// console.log(divBy100(200));


/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

function negativeOrEven(num){
  
  if(num < 0 || (num % 2 == 0)){
    return true;
  }
  else {
    return false;
  }
  
}

// console.log(negativeOrEven(2));


/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

// const arryOfFunction = [f,f,f];
function passAllTests(arryFunc, value){
  
  let count = 0;
  
  for(let i = 0; i<arryFunc.length; i++){
    if(arryFunc[i](value)){
      count++;
    }
    
    
    
  }
  
  if (count == arryFunc.length){
      return true;
    }
  else {
      return false;
    }
 
// declare a counter variable
//   iterate through array
//   each iteration pass value to array item which is a function
//   if return true increment counter
  
//   if counter equal to length of array return true 
}


/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500, divisible by 100, and a negative number OR even. Then test the number 250.
*/

const arrayOfFunctions = [negativeOrEven, divBy100, between50And500];

// console.log(passAllTests(arrayOfFunctions, 250));


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/


function isPalindrome(str){
  
//   flip a string backwards
//   compare string to the backward string
	console.log(str.split('').reverse().join(''));
  
  let newStr = "";
  newStr = str.split('').reverse().join(''); 
  
  
  if(str == newStr){
    return true;
  }
  else {
    return false;
  }
}

console.log(isPalindrome("RACECAR"));