function createFunction(){
  function helloWorld(){
    return "hello world";
  };
  
  return helloWorld;
};

// Uncomment these to check your work!
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'