function factorial(num, product = 1) {
    //basecase
    if(num == 0){
      return 1;
    }
    if(num == 1){
      return product;
    }
    //multiply product and num into new product
    const newProd = product * num;
    //decrement num
    const newNum = num - 1;
    //recursivecall with updated inputs
  return factorial(newNum, newProd);
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(factorial(4)); // -> 24
  console.log(factorial(6)); // -> 720
  console.log(factorial(0)); // -> 1