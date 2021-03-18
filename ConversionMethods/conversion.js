let baseTenNum = 5;

function decimalToBinary(num) {
  const arry = []
  for(let i = 0; num>0; i++){
    arry.push(num%2);
    num = Math.floor(num/2);
  }

  console.log(arry)
}

decimalToBinary(baseTenNum);

function binaryToDecimal(num){
  
}

function decimalToOctal(num) {


}