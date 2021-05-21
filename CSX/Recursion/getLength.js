function getLength(array, index = 0) {
    //basecase
      if(array[index] == undefined){
        return index;
      }
    //increment index
      const newIndex = index + 1;
    //recursive call
      return getLength(array, newIndex);
    }
    
    // To check if you've completed the challenge, uncomment these console.logs!
    console.log(getLength([1])); // -> 1
    console.log(getLength([1, 2])); // -> 2
    console.log(getLength([1, 2, 3, 4, 5])); // -> 5
    console.log(getLength([])); // -> 0