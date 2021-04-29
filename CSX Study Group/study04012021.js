/*
The function highestAndLowest should accept an array, and return a new array 
containing the highest and lowest numbers from the original array.
*/

/*
Write a function addN which accepts an array and a number. The function adds the argument n to each number in the array arr and returns a new array.
*/

/* 
Create a function isOdd that accepts a number argument. isOdd will return true if the number 
is odd and false if the number is even.
*/



const strCopies = (string1, string2, num, count = 0) => (!string1[0] || string1.indexOf(string2) === -1) ? count === num : strCopies(string1.slice(string1.indexOf(string2) + 1, ), string2, num, count + 1);

/*
Given a string and a non-empty substring, compute recursively if 
at least N copies of substring appear in the string somewhere, possibly with overlapping. 
N will be non-negative.

console.log(strCopies("catcowcat", "cat", 2)); // → true
console.log(strCopies("catcowcat", "cow", 2)); // → false
console.log(strCopies("catcowcat", "cow", 1)); // → true
console.log(strCopies("dogdogdog", "cow", 0)); // → true
*/

/*
Write a function that returns the type of argument the function has been called with.
*/

/*
Write a function that will iterate through an array and multiply a number by 10 if it is greater than or equal to 5.
*/

/*
Create a function 'addEvenNumbers' that takes a number as an argument. 'addEvenNumbers' should add up all the even numbers from 2 to the number you passed to the function.
For example, if the input is 8 then your function should return 20 because 2 + 4 + 6 + 8 = 20.
*/

/*
Write a function that takes in an array and returns a new array with duplicates removed
Ex: deleteDups(['a','a','a']) -> ['a']
*/

