function createFunction () {
  function multiplyBy2 (num){
    return num * 2;
  }

  return multiplyBy2;

}

const secondLabel = createFunction; // what is passed is the FUNCTION

const generatedFunc = createFunction(); // what is passed is the function DEFINITION
//PAY ATTENTION TO PARENTHESIS

const result = generatedFunc(3); //

console.log(`the result is ${result}`);

function outer() {
  let counter = o;
  function incrementCounter() {
    counter++;
  }

  return incrementCounter;
}

const myNewFunction = outer();

myNewFunction();//runs the definition of the function incrementCounter
// when counter is incremented it'll look at local memory then global memory which it does not exist 
// data of the variable counter is backpacked on when out() was assigned to myNewFunction
myNewFunction();