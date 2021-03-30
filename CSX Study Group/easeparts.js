/* ========== *
* Challenge 1 * X
* =========== */

//Uncomment the lines below to test your code
// console.log(typeof 7.0 === "number")
// console.log(typeof 22 === "number")
// console.log(typeof true === "boolean")

// var myVar;
// console.log(typeof myVar === "undefined")

// myVar = "Yanming Yu"
// console.log(typeof myVar === "string")

//Comment them back out with two forward slashes at the beginning once you have finished


/* ========== *
* Challenge 2 * X
* =========== */


// function buildSentence(word1, word2, word3) {
//   console.log(`${word1} ${word2} ${word3}`);

// }

// buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
// buildSentence("we're", "number", "1") //=> "We're number 1."


/* ========== *
* Challenge 3 * X
* =========== */


function lastLetter(word) {
  console.log(word[word.length-1]);
}

//Uncomment the lines below to test your code
// lastLetter("hello") //=> "o"
// lastLetter("goodbye!") //=> "!"
// lastLetter("ZeltoiD") //=> "D"


/* ========== *
* Challenge 4 * X
* =========== */


function buildGreeting(time, name) {
if(time < 12){
  console.log(`Good Morning, ${name}`);
}
else if(time < 18){
  console.log(`Good Afternoon, ${name}`);
}
else if (time < 25){
  console.log(`Good Evening, ${name}`);
}
else {
  console.log(`That's not a realy time, ${name}. Maybe you need some sleep!`);
}

}



// buildGreeting(8, "Maggie"); //=> "Good Morning, Maggie!"
// buildGreeting(12, "John"); //=> "Good Afternoon, John!"
// buildGreeting(22, "Stacey"); //=> "Good Evening, Stacey!"
// buildGreeting(31, "Derrick"); //=> "That's not a real time, Derrick. Maybe you need some sleep!"


/* ========== *
* Challenge 5 * x
* =========== */


// console.log( "CodeSmith".indexOf("o")); 
// console.log( "hello".indexOf("ll")); 
// console.log( "zebra".indexOf("z")); 
// console.log( "banana".indexOf("B")); 


/* ========== *
* Challenge 6 * x
* =========== */


function letterExists(word, letter) {
  return console.log(word.includes(letter));
}

// letterExists("superman", "e"); //=> true
// letterExists("starship", "S") //=> false
// letterExists("th1s", "1") //=> true
// letterExists("he!lo", "!") //=> true


/* =========== *
* Challenge 7 * x
* ============ */


function isPrime(number) {
  if(number < 0){
    for(let i = number + 1; i < 0; i++){
      if (number % i == 0){
        return false;
      }
    }
  }
  for(let i = 2; i < number; i++){
    if (number % i == 0){
      return false;
    }
  }
  return true
}

// console.log(isPrime(-7)); // => false
// console.log(isPrime(2)); // => true
// console.log(isPrime(11)); // => true
// console.log(isPrime(15)); // => false


/* ========== *
* Challenge 8 * x
* =========== */


function range(start, end) {
  if(start < end){
    for(let i = start; i <= end; i++){
      console.log(i);
    }
  }
  else if(end < start){
    for(let i = start; i >= end; i--){
      console.log(i);
    }
  }
  else{
    return false;
  }

}

//Uncomment the lines below to test your code
// range(1,4); //=> 1, 2, 3, 4
// range(4,2); //=>


/* =========== *
* Challenge 9 * x
* ============ */


function myIndexOf(array, ele){

  for(let i = 0; i<array.length ; i++){
    if(ele === array[i]){
      return console.log(i);
    }
  }
  return console.log(-1);
}

// myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
// myIndexOf(["a", "b", "c"], "a") //=> 0
// myIndexOf(["a", "b", "c"], "d") //=> -1


/* =========== *
* Challenge 10 * X
* ============ */

function unique(array) {

  const newArray = [];

  for(let i = 0; i<array.length ; i++){
    if(!newArray.includes(array[i])){
      newArray.push(array[i]);
    }
  }

  return console.log(newArray);

  //declare new array
  // if element in array does not exist in newArray, push into new array
  //return array
}

// unique([1, 1, 2, 3, 3]) //=> [1, 2, 3]
// unique(["a", "a", "c", "aa", "b", "b"]) //=> ["a", "c", "aa", "b"]


/* =========== *
* Challenge 11 * x
* ============ */

function longestWord(sentence) {

  const newArray = sentence.split(" ");

  let longestWord = newArray[0];

  for(let i = 0; i<newArray.length; i++){
  if(newArray[i].length >= longestWord.length)
    longestWord = `'${newArray[i]}'`;
  }

  return longestWord;
  // declare newarray 
  // use split string method on sentence so each word is an element in the array
  // declare variable to keep track of longest word, assign to first element
  // iterate through newArray, if word length is longer that variable, reassign variable
}

//Uncomment the lines below to test your function:

// console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('JavaScript')); // => 'JavaScript'
// console.log(longestWord('')); // => ''


/* =========== *
* Challenge 12 *
* ============ */

function disemvowel(string) {
  // make array of vowels
  // declare a new array to hold non vowel letters
  // iterate through string, if the letter is non vowel, push into new array

  const arrOfVow = [ 'a', 'e', 'i', 'o', 'u'];

  const newArray = [];

  for (let i = 0; i<string.length; i++){
    if(!arrOfVow.includes(string[i])){
      newArray.push(string[i]);
    }
  }
  return newArray.join('');
}


//Uncomment the lines below to test your function:

// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'


/* =========== *
* Challenge 13 * x
* ============ */

function divisibleByFivePairSum(array){

  const newArray = [];

  // console.log(` The array length is ${array.length} `);

  for(let i = 0; i<array.length ; i++){
    for(let j = i + 1 ; j<array.length; j++)
    {
      // console.log(`iteration i is ${i} and j is ${j}`)
      if((array[i] + array[j]) % 5 === 0){
        newArray.push([i,j])
      }
    }
  }

  return newArray;

  //iterate through array, nest another array so you can check all value together
  // if two indexes add up to the integer 5,  push an array into New array
  // return your array of arrays
}


//Uncomment the lines below to test your function:

// console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
// console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]


/* =========== *
* Challenge 14 * x
* ============ */

function highestScore(students) {

  let highScore = students[0];
  for(let i = 0; i<students.length; i++)
  {
    if (highScore.score < students[i].score){
      highScore = students[i];
    }
    // console.log(students[i]);
  }

  let initial = highScore.name.split(' ')
  let newArray = []
  for(let j = 0; j<initial.length; j++){
    newArray.push(initial[j][0])
  }

  
  return `${newArray.join('')}${highScore.id}`
  
}

//Uncomment the lines below to test your function:

var students = [
{name: 'Will Sentance', id: 128, score: -42},
{name: 'Jamie Bradshaw', id: 32, score: 57},
{name: 'Lisa Simpson', id: 2, score: 99},
{name: 'Luke Skywalker', id: 256, score: 94}
];

// highestScore(students);

console.log(highestScore(students)); //=> 'LS2'


/* =========== *
* Challenge 15 *
* ============ */

function leastCommonMultiple(num1, num2) {
  // your code here...

}


//Uncomment the lines below to test your function:

// console.log(leastCommonMultiple(2, 3)); //=> 6
// console.log(leastCommonMultiple(6, 10)); //=> 30
// console.log(leastCommonMultiple(24, 26)); //=> 312


/* ========== *
* Extension 1 *
* =========== */

function arrayBuilder(count) {
  // your code here...

}


//Uncomment the lines below to test your function:

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []


/* ========== *
* Extension 2 *
* =========== */

function objectBuilder(count) {
  // your code here...

}


//Uncomment the lines below to test your function:

// console.log(objectBuilder(4)); //=> {
  // 0: 0,
  // 1: 5,
  // 2: 10,
  // 3: 15,
  // 4: 20,
// }
// console.log(objectBuilder(0)); //=> { 0: 0 }


/* ========== *
* Extension 3 *
* =========== */

function secretCipher(sentence, cipher){
  // your code here...

}



//Uncomment the lines below to test your function:

// console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
// console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
// console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"


/* ========== *
* Extension 4 *
* =========== */

function passingStudents(students) {
  // your code here...

}


//Uncomment the lines below to test your function:

// var students = [
//   {
//     "name": "Marco",
//     "id": 12345,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
//   },
//   {
//     "name": "Donna",
//     "id": 55555,
//     "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
//   },
//   {
//     "name": "Jukay",
//     "id": 94110,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
//   }
// ];

// console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]


