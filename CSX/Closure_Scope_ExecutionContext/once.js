function once(callback){
  let beenCalled = false;
  let storageValue;
  function calledOnce(num){
    if(beenCalled){
      return storageValue;
    }
    storageValue = callback(num);
    beenCalled = true;
    return storageValue;
  }
  
  // returns function
  return calledOnce;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7