// input: array of arrays
// output: array

function intersection (arrays) {
  
    let acc = arrays.pop();
    
    while(arrays.length){
      const current = arrays.pop();
      const newArr = [];
      
      current.forEach( (element) => { if(acc.includes(element)) newArr.push(element);})
      
      acc = newArr;
    }
    
    return acc;
  }
  //   accumulator 
  //   loop through arrays of arrays
      //   compare current array with accumulator
          //   	for each element in current
              //   push tjat element into a new array
    
          // 	accumulator reassigned to new array
      //   return accumulator
  
  // Uncomment these to check your work!
  const arr1 = [5, 10, 15, 20];
  const arr2 = [15, 88, 1, 5, 7];
  const arr3 = [1, 10, 15, 5, 20];
  console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

//   My Solution

function intersection(arryOfArry){
    let comArray = [];
    let result = [];
    let switchFirst = true;
    const firstArray = arryOfArry[0];
    
    for(let i = 1; i<arryOfArry.length; i++){
      for(let j = 0; j<arryOfArry[i].length; j++){
        if(firstArray.includes(arryOfArry[i][j]) && switchFirst){
          comArray.push(arryOfArry[i][j]);
          
        }
        if(result.includes(arryOfArry[i][j])){
          comArray.push(arryOfArry[i][j]);
        }
      }
      switchFirst = false;
      result = comArray;
        comArray = [];
    }
    
  //   compare first two array
  //   keep common value in compare array
  //   update result array, clear compare array
  //   compare next array to result array
  //   keep common value in compare array
  //   update result array, clear compare array
    
    return result;
  }
  
  // Uncomment these to check your work!
  const arr1 = [5, 10, 15, 20];
  const arr2 = [15, 88, 1, 5, 7];
  const arr3 = [1, 10, 15, 5, 20];
  console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]