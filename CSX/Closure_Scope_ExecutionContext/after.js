function after(num, callback){
    const calledNum = num;
    let counter = 0;
    function printResult(word){
      counter ++;
      if(counter >= calledNum){
        return callback(word);
      }
      else{
        return undefined;
      }
    }
    
    //returns function
    return printResult;
  }
  
  const called = function(string) { return('hello ' + string); };
  const afterCalled = after(3, called);
  
  // UNCOMMENT THESE LINES TO TEST YOUR WORK
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> 'hello world' is printed