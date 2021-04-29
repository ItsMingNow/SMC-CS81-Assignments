/*
Write a function that reverses all the words in a sentence that start with a particular letter.

Examples
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"

specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep"
*/

/*
Write a function that takes a string and returns a string with its letters in alphabetical order.
 
Examples
  "hello" ➞ "ehllo"
  "goobye" ➞ "begooy"
  "javascript" ➞ "aacijprstv"
*/

function sortWordAlpha(word){
    return word.split('').sort().join('');
}

// console.log(sortWordAlpha('hello')); 
// console.log(sortWordAlpha("goobye")); //"begooy"
// console.log(sortWordAlpha("javascript")); //"aacijprstv"


/*
write a function that takes an array of integers and a target number and returns true if any combination of at least two elements in the array sum to target, and false otherwise.
input: array, number
output: boolean
strategy: multiple tree recursion to get all combos, then check if any combos sum to target
*/

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

function validParens(str){
    for(let i=0; i<str.length ; i++){

    }
}

console.log(validParens('((((}))))')) // false
console.log(validParens('({[]})')) // true
console.log(validParens('(){}[]')) // true
console.log(validParens('({[}])')) // false

/*
function validParens(str) {
  //dec dict with bracket pairs
  const dict = [[`[`,`]`],[`(`,`)`],[`{`,`}`]];
  const opens = dict.map(x=> x[0]);
  const closed = dict.map(x=> x[1]);
  //declare openParens empty str
  let openParens = '';
  //loop through the str
  for (let i = 0; i<str.length; i++) {
  	//if char is an open parens concat to openParens
    if (opens.includes(str[i])) {
        openParens+=str[i];
    
  	//else
  	} else {
  		//check if the last char of open Parens corresponds to it
      //find the index of that pair in dict
      let index = closed.indexOf(str[i]);
      if (opens[index] === openParens.slice(-1)) {
        //if so
  				//remove that last char from open parens
        	openParens = openParens.slice(0,-1);
      } else {
  			
  			//else return false
        return false;
      }
    }
  }

	
  
  // return true if open parens is empty string else false
	return (openParens.length === 0);
}
*/