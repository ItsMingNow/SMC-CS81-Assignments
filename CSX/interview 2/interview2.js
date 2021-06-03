// Create a function "addOne" that takes a number as and argument and returns that number plus one

function addOne(num){
    return num + 1;
}

// console.log(addOne(1)); //2
// console.log(addOne(-1)); // 0

// Create a function "subtractOne" that takes a number as and argument and returns that number minus one
function subtractOne(num){
return num - 1;
}

// console.log(subtractOne(1)); // 0
// console.log(subtractOne(0)); // -1

/*
There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

Example:
usePotions("3A78B51") ➞ "47751"
3 grows to 4, 8 shrinks to 7
usePotions("9999B") ➞ "9998"
usePotions("9A123") ➞ "10123"
usePotions("567") ➞ "567"
*/

function usePotions(string){
    //declare array
    const arry = [];

    for(let i =0; i<string.length; i++){
        
        if(string[i] == "A"){
        let addNum = arry.pop()
        arry.push(addOne(parseInt(addNum, 10)));
        continue; 
        }
        if(string[i] == "B"){
        let subNum = arry.pop()
        arry.push(subtractOne(parseInt(subNum, 10)));
        continue;
        }
        arry.push(string[i]);
    }
    return arry.join("");
}

// console.log(usePotions("3A78B51"));
// console.log(usePotions("9999B"));


/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.

Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
*/

function countChar(input, target){
//base case if wether the input string is empty 
if(input.length == 0){
    // num of times target is found
}
//check target against first letter if letter is target, increment
if(input[input.length] == target){
    // increment
}
//variables to hold inputstring without the first letter//string cat
let newInput = 
//recursive call with new string and target
return countChar( , target)
}

countChar('hello world', 'o');
  
  